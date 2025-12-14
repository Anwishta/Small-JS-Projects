const body = document.getElementById("id");

window.addEventListener("keydown", (e) => {
  body.innerHTML = `
    <div class ="keyboard">
        <table>
        <tr>
            <th>Key</th>
            <th>KeyCode</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${e.keyCode === 32 ? "space": e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
        
</table>
    </div>
    `;
});
