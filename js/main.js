// const request = fetch("api.msigma.in/btech/v2/branches/");
// console.log(request);

// let a = [];

// request
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     data.branches.forEach((dept, index) => {
//       if (index < 4) {
//         // console.log(dept.name);
//         a.push(dept);
//         // console.log(a[index].name);
//       }
//     });

//     document.getElementById("1").textContent = `${a[1].name}`;
//     document.getElementById("2").textContent = `${a[2].name}`;
//     console.log(a[2].name);
//     // document.getElementById("3").textContent = `${a[3].short}`;
//     // document.getElementById("im1").src = `${a[0].image}`;
//     // document.getElementById("im2").src = `${a[1].image}`;
//     // document.getElementById("im3").src = `${a[2].image}`;
//     // document.getElementById("im4").src = `${a[3].image}`;
//   });

// const apiURL = "https://api.msigma.in/btech/v2/branches/";

// // Make a GET request to the API
// fetch(apiURL)
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("Failed to fetch data from the API");
//     }
//   })
//   .then((data) => {
//     // Check if the response status is "success"
//     if (data.status === "success") {
//       const branches = data.branches;

//       // Iterate through the list of branches and display their information
//       branches.forEach((branch) => {
//         const branchId = branch.id;
//         const branchName = branch.name;
//         const branchShort = branch.short;
//         const h2 = document.createElement("h2");
//         h2.textContent = firstName + " " + lastName;
//       });
//     } else {
//       console.error("API returned an error status.");
//     }
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });

const apiURL = "https://api.msigma.in/btech/v2/branches/";

// Function to generate a random light color with half transparency
function getRandomLightColorWithTransparency() {
  const letters = "89ABCDEF"; // Use lighter color letters
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 8)];
  }
  return color + "80";
}

// Function to generate a random dark text color
function getRandomDarkTextColor() {
  const letters = "0123456789ABCDEF"; // Use all letters for darker colors
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

fetch(apiURL)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Failed to fetch data");
    }
  })
  .then((data) => {
    if (data.status === "success") {
      const branches = data.branches;
      branches.slice(0, 10).forEach((branch) => {
        var container = document.querySelector(`.container`);
        const branchId = branch.id;
        const branchName = branch.name;
        const branchShort = branch.short;
        var divItem = document.createElement("div");
        var bN = document.createElement("p");
        var fees = document.createElement("p");
        var p = document.createElement("button");
        p.innerHTML = '<a href="#">Apply Now</a>';
        bN.textContent = branchName;
        fees.textContent = "Fee starting at ₹799 per subject";
        divItem.className = "item";
        divItem.textContent = branchShort;
        divItem.appendChild(bN);
        divItem.appendChild(p);
        divItem.appendChild(fees);
        container.appendChild(divItem);
        // Change the button color to a random light color with transparency
        const button = divItem.querySelector("button");
        const randomButtonColor = getRandomLightColorWithTransparency();
        button.style.background = `linear-gradient(to bottom, ${randomButtonColor}, ${randomButtonColor})`;

        // Change the text color for branchShort to a random dark color
        divItem.style.color = getRandomDarkTextColor();
      });
    } else {
      console.error("API returned an error status.");
    }
  })
  .catch((error) => {
    console.error(error.message);
  });
