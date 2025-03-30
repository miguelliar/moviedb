import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import cross from "../../assets/cross.svg"
import { FilterType } from "./FilterInput"
import './FiltersApplied.scss'

export function FiltersApplied() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [filters, setFilters] = useState<FilterType[]>([])

    useEffect(() => {
        const urlFilters = searchParams.entries()
        const filtersApplied = []
        for (const [key, value] of urlFilters) {
            if (key !== 'query') {
                filtersApplied.push({id: key, name: key, value})
            }
        }
        setFilters(filtersApplied)
    }, [searchParams])

    const removeTag = (filter: FilterType) => {
        const params = new URLSearchParams(searchParams)
        params.delete(filter.id, filter.value)
        setSearchParams(params)
    }

    return (
        <>
            {filters.length > 0 && <h3>Filters applied</h3>}
            <div className="filters-applied">
                {filters.map((filter, index) => (
                    <div className="filter-tag" key={`${filter.id}-${index}`}>
                        <p className="filter-tag__label">{filter.id}-<b>{filter.value}</b></p>
                        <button className="filter-tag__button" role="button" onClick={() => removeTag(filter)}>
                            <img className="filter-tag__cross" src={cross}/>
                        </button>
                    </div>
                ))}
            </div>
        </>
    )
}
