var journal = {
    newEntry: function() {
        var titleBox, entryBox, saveButton;
        
        // Create the title input field
        titleBox = document.createElement("input");
        titleBox.id = "entry-title";

        // Create the entry field
        entryBox = document.createElement("textarea");
        entryBox.id = "entry-content";

        // Create the save button
        saveButton = document.createElement("button");
        saveButton.id = "save-entry";
        saveButton.innerHTML = "Save";

        // Add everything to the window / DOM
        document.getElementsByClassName("actions-header")[0].innerHTML = "";
        document.getElementsByClassName("actions-header")[0].appendChild(titleBox);
        document.getElementsByClassName("actions-header")[0].appendChild(document.createElement("br"));
        document.getElementsByClassName("actions-header")[0].appendChild(entryBox);
        document.getElementsByClassName("actions-header")[0].appendChild(document.createElement("br"));
        document.getElementsByClassName("actions-header")[0].appendChild(saveButton);
    }
};
