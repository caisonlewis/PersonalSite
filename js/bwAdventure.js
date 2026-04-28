class AdventureEntry {
    constructor(title, date, thoughts) {
        this.title = title;
        this.date = date;
        this.thoughts = thoughts;
    }

    createEntryElement() {
        let entryDiv = document.createElement("div");
        entryDiv.classList.add("journal-entry"); // Use this class for styling

        let card = document.createElement("div");
        card.classList.add("journal-card"); // New class to style each entry as a card

        let title = document.createElement("h2");
        title.textContent = this.title;

        let date = document.createElement("p");
        date.classList.add("entry-date");
        date.textContent = `Posted on: ${this.date}`;

        let desc = document.createElement("p");
        desc.classList.add("entry-text");
        desc.textContent = this.thoughts;

        // Append elements to card container
        card.appendChild(title);
        card.appendChild(date);
        card.appendChild(desc);

        // Add the card to the entry div
        entryDiv.appendChild(card);

        return entryDiv;
    }
}

// Create new entries separately then add to array

const apr_28_26 = new AdventureEntry("The Start of My Pokemon White Adventure!", "April 28, 2026", "Today I am starting a fresh playthrough of Pokemon White Version. I dont think I have played through the original black and white since their release back in 2012.");

// Array of entries
const entries = [apr_28_26];

// Display entries on the page
document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("day-container");

    entries.forEach(entry => {
        container.appendChild(entry.createEntryElement());
    });
});