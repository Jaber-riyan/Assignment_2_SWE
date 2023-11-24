const blogResult = (value)=>
{
    return;
}

const allcontentview = (id) =>
{
    fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
        .then(response => response.json())
        .then(data => all(data.data))
}


const musiccontentview = (id) =>
{
    fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
        .then(response => response.json())
        .then(data => music(data.data))
}

const comedycontentview = (id) =>
{
    fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
        .then(response => response.json())
        .then(data => comedy(data.data))
}

const drawingcontentview = (id) =>
{
    console.log(id);
    drawing();
}




const all = (data) =>
{
    const allContentDiv = document.getElementById("all-content");

    data.forEach(content=>
    {
        // console.log(content);
        const contentBox = document.createElement("div");
        contentBox.classList.add("box");

        contentBox.innerHTML= `
        <img class="box-img" src="${content.thumbnail}" alt="Person Photo">
        <p onclick="convertSecondsToHoursAndMinutes(parseInt(${content.authors.posted_date}))"></p>
        <p id="title">${content.title}</p>
        <img  id="id-picture" src="${content.authors[0].profile_picture}" alt="Person Photo">
        <p>${content.authors[0].profile_name}</p>
        <p>${content.others.views} views</p>
        `
        allContentDiv.appendChild(contentBox);
    })
}

const music = (data) =>
{
    const musicContentDiv = document.getElementById("music-content");

    data.forEach(content=>
    {
        // console.log(content);
        const contentBox = document.createElement("div");
        contentBox.classList.add("box");

        contentBox.innerHTML= `
        <img class="box-img" src="${content.thumbnail}" alt="Person Photo">
        <p onclick="convertSecondsToHoursAndMinutes(parseInt(${content.authors.posted_date}))"></p>
        <p id="title">${content.title}</p>
        <img  id="id-picture" src="${content.authors[0].profile_picture}" alt="Person Photo">
        <p>${content.authors[0].profile_name}</p>
        <p>${content.others.views} views</p>
        `
        musicContentDiv.appendChild(contentBox);
    })
}

const comedy = (data) =>
{
    const comedyContentDiv = document.getElementById("comedy-content");

    data.forEach(content=>
    {
        // console.log(content);
        const contentBox = document.createElement("div");
        contentBox.classList.add("box");

        contentBox.innerHTML= `<img class="box-img" src="${content.thumbnail}" alt="Person Photo">
        <p data-posted-date="${content.authors.posted_date}"></p>
        <p id="title">${content.title}</p>
        <img  id="id-picture" src="${content.authors[0].profile_picture}" alt="Person Photo">
        <p>${content.authors[0].profile_name}</p>
        <p>${content.others.views} views</p>`
        comedyContentDiv.appendChild(contentBox);
    })
}

const drawing = () =>
{
    const drawingContentDiv = document.getElementById("drawing-content");

    const divforDraw = document.createElement("div");
    divforDraw.classList.add("draw-cl");

    divforDraw.innerHTML=`
    <img  id="drawing-error-picture" src="./Icon.png" alt="Person Photo">
    <h1>Oops!! Sorry, There is no content here</h1>
    `
    drawingContentDiv.appendChild(divforDraw);
}


const sortByView = () =>
{
    const viewContent = document.getElementsByClassName("sort-view");
}

// allcontentview(1000);


function convertSecondsToHoursAndMinutes(seconds)
{
    var hours = Math.floor(seconds / 3600);
    var remainingSeconds = seconds % 3600;
  

    var minutes = Math.floor(remainingSeconds / 60);
  
    console.log("Hours : ",hours,"Minutes : ",minutes);
}

  