//array
let jobs = [
  {
    id: 1,
    title: "Mobile First Corp",
    role: "React Native Developer",
    location: "Remote • Full-time • $130,000 - $175,000",
    description: "Build cross-platform mobile applications...",
    status: "not-applied"
  },
  {
    id: 2,
    title: "Apple",
    role: "Fullstack Developer",
    location: "Onsite • Full-time • $130,000 - $175,000",
    description: "Build Responsive web applications...",
    status: "not-applied"
  }
];

//getting the buttons (all, interview, rejected)
allBtn = document.getElementById("all-btn");
interviewBtn = document.getElementById("interview-btn");
rejectedBtn = document.getElementById("rejected-btn");


//getting all the score elemnts 
allScore = document.getElementById("all-score");
interviewScore = document.getElementById("interview-score");
rejectedScore = document.getElementById("rejected-score");


//getting all the 3 main sections (all, interview, rejected)
allCardSection = document.getElementById("all-card-section");
interviewCardSection = document.getElementById("interview-card-section");
rejectedCardSection = document.getElementById("rejected-card-section");

const interviewEmptyTemplate = interviewCardSection.innerHTML;
const rejectedEmptyTemplate = rejectedCardSection.innerHTML;




//calculating the number of cards in each section
function calculateCount(){
    allScore.innerText = jobs.length;
    interviewScore.innerText = jobs.filter(job => job.status === "interview").length;
    rejectedScore.innerText = jobs.filter(job => job.status === "rejected").length;

}

calculateCount();




function totalJob(section){
    if(section === "all"){
        document.getElementById("all").innerText = jobs.length + ' ' + "Jobs";
    } else if(section === "interview"){
        document.getElementById("all").innerText = jobs.filter(job => job.status === "interview").length + ' ' + "Jobs";
    } else if(section === "rejected"){
        document.getElementById("all").innerText = jobs.filter(job => job.status === "rejected").length + ' ' + "Jobs";
    }
}

totalJob("all");









function toggleStyle(id){
    

    allBtn.classList.remove("text-white", "bg-[#3B82F6]");
    interviewBtn.classList.remove("text-white", "bg-[#3B82F6]");
    rejectedBtn.classList.remove("text-white", "bg-[#3B82F6]");

    allBtn.classList.add("text-[#64748B]", "bg-white");
    interviewBtn.classList.add("text-[#64748B]", "bg-white");
    rejectedBtn.classList.add("text-[#64748B]", "bg-white");

    document.getElementById(id).classList.remove("text-[#64748B]", "bg-white");
    document.getElementById(id).classList.add("text-white", "bg-[#3B82F6]");

    //showing the section according to the button clicked
    if(id === "all-btn"){
        allCardSection.classList.remove("hidden");
        interviewCardSection.classList.add("hidden");
        rejectedCardSection.classList.add("hidden");
        totalJob("all");
        renderAllSection();

    }
    else if(id === "interview-btn"){
        allCardSection.classList.add("hidden");
        interviewCardSection.classList.remove("hidden");
        rejectedCardSection.classList.add("hidden");
            totalJob("interview");
            renderInterviewSection();
    }
    else if(id === "rejected-btn"){
        allCardSection.classList.add("hidden");
        interviewCardSection.classList.add("hidden");
        rejectedCardSection.classList.remove("hidden");
        
        renderRejectedSection();
        totalJob("rejected");
    }
}


function renderAllSection(){
    allCardSection.innerHTML = "";
    

    for(let job of jobs){
        let div = document.createElement("div");
        div.classList.add("card", "bg-white", "rounded-xl", "relative", "p-6", "mb-8", "md:mb-4");


        let statusText = "";
        let statusClass = "";

        if(job.status === "not-applied"){
            statusText = "NOT APPLIED";
            statusClass = "bg-[#EEF4FF] text-[#64748B]";
        }
        else if(job.status === "interview"){
            statusText = "INTERVIEW";
            statusClass = "border border-[#10B981] text-[#10B981]";
        }
        else if(job.status === "rejected"){
            statusText = "REJECTED";
            statusClass = "border border-[#EF4444] text-[#EF4444]";
        }
        
        
        if(job.status === "interview"){
            div.classList.add("border-l-2", "border-[#10B981]");
        } else if(job.status === "rejected"){
            div.classList.add("border-l-2", "border-[#EF4444]");
        }else{
            div.classList.remove("border-l-2", "border-[#10B981]", "border-[#EF4444]");
        }
        
        div.innerHTML = `
          <div class="card-content">
              <h3 class="text-[#002C5C] text-2xl font-semibold mb-1 card-title">
                ${job.title}
              </h3>
              <p class="text-[#64748B] text-xl mb-5 card-role">
                ${job.role}
              </p>
              <p class="text-[#64748B] mb-5 card-location">
                ${job.location}
              </p>
              
              <button class="px-3 py-2.5 font-medium mb-2 rounded-lg ${statusClass}">
                ${statusText}
              </button>
              <p class="text-[#323B49] mb-5 card-description">
                ${job.description}
              </p>
              <div class="flex gap-2">
                <button
                  class="px-3 py-2.5 font-semibold bg-transparent border border-[#10B981] text-[#10B981] hover:bg-[#10B981] hover:text-white rounded-lg interview-card-btn"
                >
                  INTERVIEW
                </button>
                <button
                  class="px-3 py-2.5 font-semibold bg-transparent border border-[#EF4444] text-[#EF4444] hover:bg-[#EF4444] hover:text-white rounded-lg rejected-card-btn"
                >
                  REJECTED
                </button>
              </div>
            </div>

            <button onclick="deleteJob('${job.title}', 'all')" class="absolute top-7 right-7">
              <i
                class="fa-regular fa-trash-can border rounded-full border-[#64748B] p-2"
              ></i>
            </button>
        `;

        allCardSection.appendChild(div);
    }
}

renderAllSection();

function renderInterviewSection(){

    const interviewJobs = jobs.filter(job => job.status === "interview");

    // If no interview jobs → show empty state
    if(interviewJobs.length === 0){
        interviewCardSection.innerHTML = interviewEmptyTemplate;
        return;
    }

    // Otherwise clear and render cards
    interviewCardSection.innerHTML = "";

    for(let job of interviewJobs){

        let div = document.createElement("div");
        div.className = "card bg-white rounded-xl relative p-6 mb-8 md:mb-4 border-l-2 border-[#10B981]";

        
        div.innerHTML = `
          <div class="card-content">
              <h3 class="text-[#002C5C] text-2xl font-semibold mb-1 card-title">
                ${job.title}
              </h3>
              <p class="text-[#64748B] text-xl mb-5 card-role">
                ${job.role}
              </p>
              <p class="text-[#64748B] mb-5 card-location">
                ${job.location}
              </p>
              
              <button class="px-3 py-2.5 font-medium mb-2 rounded-lg border border-[#10B981] text-[#10B981]">
                INTERVIEW
              </button>
              <p class="text-[#323B49] mb-5 card-description">
                ${job.description}
              </p>
              <div class="flex gap-2">
                <button
                  class="px-3 py-2.5 font-semibold bg-transparent border border-[#10B981] text-[#10B981] hover:bg-[#10B981] hover:text-white rounded-lg interview-card-btn"
                >
                  INTERVIEW
                </button>
                <button
                  class="px-3 py-2.5 font-semibold bg-transparent border border-[#EF4444] text-[#EF4444] hover:bg-[#EF4444] hover:text-white rounded-lg rejected-card-btn"
                >
                  REJECTED
                </button>
              </div>
            </div>

            <button onclick="deleteJob('${job.title}', 'interview')" class="absolute top-7 right-7">
              <i
                class="fa-regular fa-trash-can border rounded-full border-[#64748B] p-2"
              ></i>
            </button>
        `;

        interviewCardSection.appendChild(div);
    }
}


function renderRejectedSection(){

    const rejectedJobs = jobs.filter(job => job.status === "rejected");

    // If no rejected jobs → show empty state
    if(rejectedJobs.length === 0){
        rejectedCardSection.innerHTML = rejectedEmptyTemplate;
        return;
    }

    // Otherwise clear and render cards
    rejectedCardSection.innerHTML = "";

    for(let job of rejectedJobs){

        let div = document.createElement("div");
        div.className = "card bg-white rounded-xl relative p-6 mb-8 md:mb-4 border-l-2 border-[#EF4444]";

        
        div.innerHTML = `
          <div class="card-content">
              <h3 class="text-[#002C5C] text-2xl font-semibold mb-1 card-title">
                ${job.title}
              </h3>
              <p class="text-[#64748B] text-xl mb-5 card-role">
                ${job.role}
              </p>
              <p class="text-[#64748B] mb-5 card-location">
                ${job.location}
              </p>
              
              <button class="px-3 py-2.5 font-medium mb-2 rounded-lg border border-[#EF4444] text-[#EF4444]">
                REJECTED
              </button>
              <p class="text-[#323B49] mb-5 card-description">
                ${job.description}
              </p>
              <div class="flex gap-2">
                <button
                  class="px-3 py-2.5 font-semibold bg-transparent border border-[#10B981] text-[#10B981] hover:bg-[#10B981] hover:text-white rounded-lg interview-card-btn"
                >
                  INTERVIEW
                </button>
                <button
                  class="px-3 py-2.5 font-semibold bg-transparent border border-[#EF4444] text-[#EF4444] hover:bg-[#EF4444] hover:text-white rounded-lg rejected-card-btn"
                >
                  REJECTED
                </button>
              </div>
            </div>

            <button onclick="deleteJob('${job.title}', 'rejected')" class="absolute top-7 right-7">
              <i
                class="fa-regular fa-trash-can border rounded-full border-[#64748B] p-2"
              ></i>
            </button>
        `;

        rejectedCardSection.appendChild(div);
    }
}


function deleteJob(title, status){
    jobs = jobs.filter(job => job.title !== title);
    renderAllSection();
    renderInterviewSection();
    renderRejectedSection();
    calculateCount();

    if(status === "all"){
        totalJob("all");
    }else if(status === "interview"){
        totalJob("interview");
    }else if(status === "rejected"){
        totalJob("rejected");
    }

    console.log(jobs);
}


document.getElementById("main").addEventListener("click", function(event){
    if(event.target.classList.contains("interview-card-btn")){
        const cardTitle = event.target.parentNode.parentNode.querySelector(".card-title").innerText;
        const jobIndex = jobs.findIndex(job => job.title === cardTitle);
        if(jobIndex !== -1){
            jobs[jobIndex].status = "interview";
            renderAllSection();
            renderRejectedSection();
            totalJob("interview");
            calculateCount();
        }
        
    }else if(event.target.classList.contains("rejected-card-btn")){
        const cardTitle = event.target.parentNode.parentNode.querySelector(".card-title").innerText;
        const jobIndex = jobs.findIndex(job => job.title === cardTitle);
        if(jobIndex !== -1){
            jobs[jobIndex].status = "rejected";
            renderAllSection();
            renderInterviewSection();
            totalJob("rejected");
            calculateCount();
        }
    }

})




