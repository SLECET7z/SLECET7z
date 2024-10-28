        function checkKey() {
            const key = document.getElementById('keyInput').value;
            const correctKey = "1234";
            if (key === correctKey) {
                alert("Key is correct!");
                document.getElementById('hiddenContent').style.display = 'block';
            } else {
                alert("Incorrect key, please try again.");
            }
        }
