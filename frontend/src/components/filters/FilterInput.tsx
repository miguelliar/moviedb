import { useSearchParams } from "react-router-dom"
import { useDebouncedCallback } from "use-debounce"
import './FilterInput.scss'
import { useState } from "react"

export type FilterType = {
    id: string
    name: string
    value?: string
}

export type FilterInputProps = {
    filter: FilterType,
    type: "number" | "text"
}

export function InputFilter({filter, type}: FilterInputProps) {
    const [searchParams, setSearchParams] = useSearchParams()
    const [isOpened, setIsOpened] = useState(false)
    const filterApplied = searchParams.get(filter.id)
    const [filterValue, setFilterValue] = useState(filterApplied)

    const handleFilter = useDebouncedCallback((value: string) => {
        setFilterValue(value)
    }, 500)

    const onAddFilter = () => {
        const params = new URLSearchParams(searchParams)
        if (filterValue) {
            params.set(filter.id, filterValue)
        }

        setSearchParams(params.toString())
    }

    return (
        <div className="filter">
            <button 
                className="filter__label"
                role="button"
                onClick={() => setIsOpened(!isOpened)}
            >
                {filter.name}
            </button>
            {isOpened && (
                <div className="filter__input_container">
                    <input
                        className="filter__input"
                        id={filter.id} 
                        type={type}
                        placeholder={`Filter by ${filter.name}`}
                        onChange={(event) => handleFilter(event.target.value)}
                    />
                    <button
                        className="filter__input-apply"
                        role="button"
                        aria-label={`Click to add ${filter.name}`}
                        onClick={onAddFilter}
                    >
                        Add
                    </button>
                </div>)}
        </div>
    )
}
