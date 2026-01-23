<!DOCTYPE html>
<html>
<head>
    <title>AJAX Example</title>
</head>
<body>
    <h2>AJAX Fetch Example</h2>
    <button id="loadDataBtn">Load Data</button>
    <div id="result"></div>

    <script>
        document.getElementById("loadDataBtn").addEventListener("click", function () {
            // Example API endpoint (you can replace with your own)
            const url = "https://jsonplaceholder.typicode.com/posts/1";

            // Make AJAX request using fetch
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json(); // Parse JSON response
                })
                .then(data => {
                    // Display data in the page
                    document.getElementById("result").innerHTML = `
                        <h3>${data.title}</h3>
                        <p>${data.body}</p>
                    `;
                })
                .catch(error => {
                    document.getElementById("result").innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
                });
        });
    </script>
</body>
</html>
