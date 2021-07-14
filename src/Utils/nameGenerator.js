const malename = [
    "Allen", "Bob", "Carlton",
    "David", "Ernie", "Foster",
    "George", "Howard", "Ian",
    "Jeffery", "Kenneth", "Lawrence",
    "Michael", "Nathen", "Orson",
    "Peter", "Quinten", "Reginald",
    "Stephen", "Thomas", "Morris",
    "Victor", "Walter", "Xavier",
    "Charles", "Anthony", "Gordon",
    "Percy", "Conrad", "Quincey",
    "Armand", "Jamal", "Andrew",
    "Matthew", "Mark", "Gerald"
]

let i = 0;
export default function RandomName() {
    i = Math.floor(Math.random() * malename.length);
    return(
        malename[i]
    )

}