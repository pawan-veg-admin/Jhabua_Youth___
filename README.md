<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Upload to n8n</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f9;
            margin: 0;
        }
        .container {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            text-align: center;
            width: 400px;
        }
        h2 { color: #333; }
        
        .file-upload {
            border: 2px dashed #007bff;
            padding: 20px;
            margin: 20px 0;
            cursor: pointer;
            background: #f0f8ff;
            border-radius: 5px;
        }
        .file-upload:hover { background: #e6f2ff; }
        
        button {
            background-color: #28a745;
            color: white;
            padding: 12px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            width: 100%;
        }
        button:hover { background-color: #218838; }

        #status { margin-top: 15px; font-weight: bold; font-size: 14px; }
        .success { color: green; }
        .error { color: red; }
    </style>
</head>
<body>

    <div class="container">
        <h2>📤 Upload Menu Image</h2>
        <p style="font-size: 12px; color: gray;">Target: webhook-test/Image_To_Exal</p>

        <div class="file-upload" onclick="document.getElementById('fileInput').click()">
            <span id="fileName">📁 Click to Select Image</span>
            <input type="file" id="fileInput" accept="image/*" style="display: none" onchange="updateName()">
        </div>

        <button onclick="uploadImage()">🚀 Upload to n8n</button>

        <p id="status"></p>
    </div>

    <script>
        // आपका दिया हुआ Test Webhook URL
        const WEBHOOK_URL = "https://n8n.srv1240914.hstgr.cloud/webhook-test/Image_To_Exal";

        function updateName() {
            const input = document.getElementById('fileInput');
            if(input.files.length > 0) {
                document.getElementById('fileName').innerText = "✅ " + input.files[0].name;
            }
        }

        async function uploadImage() {
            const input = document.getElementById('fileInput');
            const status = document.getElementById('status');

            if (input.files.length === 0) {
                alert("Please select an image first.");
                return;
            }

            status.innerText = "⏳ Sending... (Check n8n UI)";
            status.className = "";

            const formData = new FormData();
            // n8n आमतौर पर 'data' नाम से binary expect करता है
            formData.append('data', input.files[0]);

            try {
                const response = await fetch(WEBHOOK_URL, {
                    method: 'POST',
                    body: formData
                });

                if (response.ok) {
                    status.innerText = "✅ Sent Successfully! Check n8n Canvas.";
                    status.className = "success";
                    
                    // अगर n8n एक्सेल फाइल वापस भेज रहा है, तो डाउनलोड करें:
                    const blob = await response.blob();
                    if (blob.size > 0) {
                        const url = window.URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = "result.xlsx";
                        document.body.appendChild(a);
                        a.click();
                        status.innerText += " (File Downloaded)";
                    }
                } else {
                    status.innerText = "❌ Error: " + response.statusText;
                    status.className = "error";
                }
            } catch (error) {
                console.error(error);
                status.innerHTML = "❌ Failed.<br><small>Test URL requires 'Execute Workflow' active.</small>";
                status.className = "error";
            }
        }
    </script>

</body>
</html>
