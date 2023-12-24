import Timeline, { Timepoint } from "@/app/ui/timeline";
import { JSX } from "react";

export default function Education() {
    const events: Timepoint[] = [
        {
            beginning: new Date(2021, 9, 1),
            end: new Date(2024, 7, 1),
            title: "BUT Informatique",
            content: "BUT Informatique à l'IUT de Lens"
        },
        {
            beginning: new Date(2020, 9, 1),
            end: new Date(2021, 7, 1),
            title: "Baccalauréat Général",
            content: "Spécialités Numériques et Sciences Informatiques & Sciences de l'Ingénieur ; Option Euro-Anglais et Mathématiques Complémentaires"
        },
        {
            beginning: new Date(2023, 6, 5),
            end: new Date(2023, 7, 28),
            title: "Stage de Développement Web (Adexos)",
            content: "Stage de 8 semaines en entreprise de développment Web. Réalisation d'une application interne de prospection en Symfony."
        },
        {
            beginning: new Date(2023,2,1),
            end: new Date(2023,5,26),
            title: "Semestre en Erasmus en Irlande",
            content: "Dundalk Institute of Technology"
        },
        {
            beginning: new Date(2021,6,1),
            end: new Date(2021,6,1),
            title: "Certification Cambridge",
            content: "Niveau B2 en Anglais"
        }
    ];
    return (
        <main>
            <h1>Mon Parcours</h1>
            <Timeline timepoints={events} />
        </main>
    );
}