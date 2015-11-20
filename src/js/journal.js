var journal = {
    saveEntry: function(title, body) {
        var database = JSON.parse(localStorage.getItem("journal")),
            entryID = database.nextEntryId;
        
        database.nextEntryId++;
        database.entries["post" + entryID] = {};
        database.entries["post" + entryID].title = title;
        database.entries["post" + entryID].body = body;

        localStorage.setItem("journal", JSON.stringify(database));
        window.location = "index.html";
    },

    newEntry: function() {
        var titleBox, entryBox, saveButton;
        
        // Create the title input field
        titleBox = document.createElement("input");
        titleBox.id = "entry-title";

        // Create the entry field
        entryBox = document.createElement("textarea");
        entryBox.id = "entry-body";

        // Create the save button
        saveButton = document.createElement("button");
        saveButton.id = "save-entry";
        saveButton.innerHTML = "Save";
        saveButton.onclick = function() {
            var title, body;
            
            // Get entry metadata
            title = document.getElementById("entry-title").value;
            body = document.getElementById("entry-body").value;
            
            // Execute to save the entry
            journal.saveEntry(title, body);
        }

        // Add everything to the window / DOM
        document.getElementsByClassName("actions-header")[0].innerHTML = "";
        document.getElementsByClassName("actions-header")[0].appendChild(titleBox);
        document.getElementsByClassName("actions-header")[0].appendChild(document.createElement("br"));
        document.getElementsByClassName("actions-header")[0].appendChild(entryBox);
        document.getElementsByClassName("actions-header")[0].appendChild(document.createElement("br"));
        document.getElementsByClassName("actions-header")[0].appendChild(saveButton);
    },

    showEntries: function() {
        var database = JSON.parse(localStorage.getItem("journal")),
            container = document.createElement("div");

        for (var i in database.entries) {
            var post = database.entries[i],
                wrapper, title, body;

            title = document.createElement("h2");
            body = document.createElement("p");
            wrapper = document.createElement("article");

            title.innerHTML = post.title;
            body.innerHTML = post.body;

            wrapper.appendChild(title);
            wrapper.appendChild(body);
            container.appendChild(wrapper);
        }
        
        document.getElementsByClassName("actions-header")[1].appendChild(container);
    }
};
