const reviewData = [
    {
       id:0,
       name:"jenie willson",
       job:"Web Developer",
       description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugit laborum veniam ipsum molestiae reprehenderit officia nam similique vitae ducimus!lorem10",
       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT_PSkR3ta1Opgdo5Yzr8yxMFSlXMt0-dL_DE8V7hoA3gxMwQ25Iw6DsAVJ4Qo4XLCLpA&usqp=CAU", 
    },
    {
        id:1,
        name:"David Bakham",
        job:"Software Engineer",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugit laborum veniam ipsum molestiae reprehenderit officia nam similique vitae ducimus!lorem10Lorem ipsum dolor sit amet consectetur adipisicing elit. QuisLorem ipsum dolor sit amet consectetur adipisicing elit. Quis.",
        img: "https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg", 
     },
     {
        id:2,
        name:"Robert Downey jr",
        job:"Actor",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugit laborum veniam ipsum molestiae reprehenderit officia nam similique vitae ducimus!lorem10Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis.",
        img: "https://www.google.com/url?sa=i&url=http%3A%2F%2Ft2.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcQijI6Sf7U-nKAfhHFmFBhVVVIxOfzI3QBeHqEjXJ7qcqbu98eqykx0UdmHrvt9Wx5hKilfZROD0mR85gk&psig=AOvVaw3REQxDbpUXSckkbTjrB8C-&ust=1678468063511000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCOjH3_Oqz_0CFQAAAAAdAAAAABAE", 
     },
];
let currentData = 0;

const image = document.querySelector(".img");
const name = document.querySelector(".name");
const jobName = document.querySelector(".job");
const details = document.querySelector(".details");

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const random = document.querySelector(".random");

right.addEventListener("click",()=>{
    currentData++;
    if(currentData>reviewData.length-1){
        currentData=0;
    }
    show();
});

left.addEventListener("click",()=>{
    currentData--;
    if(currentData<0){
        currentData=reviewData.length-1;
    }
    show();
});

random.addEventListener("click",()=>{
    currentData = Math.floor(Math.random()*reviewData.length)
    show();
})

function show(){
    image.src = reviewData[currentData].img;
    name.textContent = reviewData[currentData].name;
    jobName.textContent = reviewData[currentData].job;
    details.textContent = reviewData[currentData].description;
}