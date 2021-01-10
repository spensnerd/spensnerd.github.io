try {
    let options {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric"
    };
    document.getElementById(
        "currentdate2"
    ).textContent = new Date(document.lastModified).toLocaleDateString("en-US", options);
} catch (e){
    alert("Error with your code or browser does not support locale");