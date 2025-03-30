import { FilmForm } from "../components/FilmForm";
import { FilmData } from "../utils/types";

export function FilmCreate() {

    const onSubmit = (film: FilmData) => {
        //TODO: connect with endpoint
        console.log("film created: " + JSON.stringify(film))
    }

    return <main>
        <FilmForm onSubmit={onSubmit} submitText="Add film" />
    </main>
}