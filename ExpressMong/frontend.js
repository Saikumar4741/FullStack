async function getData() {
    try {
        const response = await axios.get("http://localhost:3000/api/students");
        createTable(response.data);
    } catch (error) {
        console.error("Failed to fetch data:", error);
    }
}

function createTable(data) {
    let table = document.querySelector("#userdata");
    let innerData = "";
    data.forEach(item => {
        innerData += `
            <tr>
                <td>${item._id}</td>
                <td>${item.name}</td>
                <td>${item.phone}</td>
                <td>${item.email}</td>
                <td>
                    <button onclick="updateData('${item._id}')">Edit</button>
                    <button onclick="deleteData('${item._id}')">Delete</button>
                </td>
            </tr>`;
    });
    table.innerHTML = innerData;
}

async function addData() {
    let id = document.querySelector("#id").value;
    let name = document.querySelector("#name").value;
    let branch = document.querySelector("#branch").value;
    let email = document.querySelector("#email").value;
    try {
        await axios.post("http://localhost:3000/api/students", {
            "_id": id,
            "name": name,
            "phone": branch,
            "email": email
        });
        getData();
    } catch (error) {
        console.error("Failed to add data:", error);
    }
}

async function updateData(id) {
    let name = document.querySelector("#name").value;
    let phone = document.querySelector("#branch").value;
    let email = document.querySelector("#email").value;
    try {
        await axios.put(`http://localhost:3000/api/students/${id}`, {
            "name": name,
            "phone": phone,
            "email": email
        });
        getData();
    } catch (error) {
        console.error("Failed to update data:", error);
    }
}

async function deleteData(id) {
    try {
        await axios.delete(`http://localhost:3000/api/students/${id}`);
        getData();
    } catch (error) {
        console.error("Failed to delete data:", error);
    }
}