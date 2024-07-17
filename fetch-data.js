async function fetchUserData() {
  const dataContainer = document.getElementById("api-data");
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  try {
    const response = await fetch(apiUrl);
    const users = await response.json();
    dataContainer.innerHTML = "";
    const userList = document.createElement("ul");
    users.forEach((user) => {
      const userItem = document.createElement("li");
      userItem.textContent = user.name;
      userList.appendChild(userItem);
    });
    dataContainer.appendChild(userList);
  } catch (error) {
    dataContainer.innerHTML = "";
    dataContainer.textContent = "Failed to load user data";
  }
}
document.addEventListener("DOMContentLoaded", fetchUserData);
