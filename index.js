//array
let interviewList = [];
let rejectedList = [];

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


//calculating the number of cards in each section
function calculateCount(){
    allScore.innerText = allCardSection.children.length;
    interviewScore.innerText = interviewList.length;
    rejectedScore.innerText = rejectedList.length;

    

}

calculateCount();

function totalJob(section){
    if(section === "all"){
        document.getElementById("all").innerText = allCardSection.children.length + ' ' + "Jobs";
    } else if(section === "interview"){
        document.getElementById("all").innerText = interviewList.length + ' ' + "Jobs";
    } else if(section === "rejected"){
        document.getElementById("all").innerText = rejectedList.length + ' ' + "Jobs";
    }
}

totalJob("all");


function toggleStyle(id){

    allBtn.classList.remove("text-white", "bg-[#3B82F6]");
    interviewBtn.classList.remove("text-white", "bg-[#3B82F6]");
    rejectedBtn.classList.remove("text-white", "bg-[#3B82F6]");

    allBtn.classList.add("text-[#64748B]", "bg-white");
    interviewBtn.classList.add("text-[#64748B]", "bg-white");
    rejectedBtn.classList.add("bg-text-[#64748B]", "bg-white");

    document.getElementById(id).classList.remove("text-[#64748B]", "bg-white");
    document.getElementById(id).classList.add("text-white", "bg-[#3B82F6]");

    //showing the section according to the button clicked
    if(id === "all-btn"){
        allCardSection.classList.remove("hidden");
        interviewCardSection.classList.add("hidden");
        rejectedCardSection.classList.add("hidden");
        totalJob("all");
    }
    else if(id === "interview-btn"){
        allCardSection.classList.add("hidden");
        interviewCardSection.classList.remove("hidden");
        rejectedCardSection.classList.add("hidden");
            totalJob("interview");
    }
    else if(id === "rejected-btn"){
        allCardSection.classList.add("hidden");
        interviewCardSection.classList.add("hidden");
        rejectedCardSection.classList.remove("hidden");
        totalJob("rejected");
    }
}


//when interview btn is clicked, the card will be added to the interview section and the status will be changed to interview

document.getElementById("main").addEventListener("click", function(event){
    if(event.target.classList.contains("interview-card-btn")){
        const parentNode = event.target.parentNode.parentNode;

        const cardTitle = parentNode.querySelector(".card-title").innerText;
        const cardRole = parentNode.querySelector(".card-role").innerText;
        const cardLocation = parentNode.querySelector(".card-location").innerText;
        const cardDescription = parentNode.querySelector(".card-description").innerText;

        const statusBtn = parentNode.querySelector("#status");
        const cardStatus = statusBtn.innerText;

        const cardInfo = {
            cardTitle,
            cardRole,
            cardLocation,
            cardStatus,
            cardDescription
        }

        const jobExist = interviewList.find(job => job.cardTitle === cardInfo.cardTitle);
        statusBtn.innerText = "INTERVIEW";
        cardInfo.cardStatus = "INTERVIEW";
        statusBtn.classList.remove("bg-[#EEF4FF]", "text-[#64748B]");
        statusBtn.classList.add("bg-transparent", "border", "border-[#10B981]", "text-[#10B981]");
        parentNode.parentNode.classList.add("border-l-2", "border-[#10B981]");
        if(!jobExist){
            interviewList.push(cardInfo);
            renderInterviewSection();
        }
        calculateCount();
    }

})

function renderInterviewSection(){
    interviewCardSection.innerHTML = "";
    
    for(let interview of interviewList){
        let div = document.createElement("div");
        div.classList.add("card", "bg-white", "rounded-xl", "relative", "p-6", "mb-8", "md:mb-4", "border-l-2", "border-[#10B981]");
        div.innerHTML = `
            <div class="card-content">
              <h3 class="text-[#002C5C] text-2xl font-semibold mb-1 card-title">
                ${interview.cardTitle}
              </h3>
              <p class="text-[#64748B] text-xl mb-5 card-role">
                ${interview.cardRole}
              </p>
              <p class="text-[#64748B] mb-5 card-location">
                ${interview.cardLocation}
              </p>
              <button
                class="px-3 py-2.5 font-medium mb-2 rounded-lg bg-transparent border border-[#10B981] text-[#10B981]"
              >
                ${interview.cardStatus}
              </button>
              <p class="text-[#323B49] mb-5 card-description">
                ${interview.cardDescription}
              </p>
              <div class="flex gap-2">
                <button
                  class="px-3 py-2.5 font-semibold bg-transparent border border-[#10B981] text-[#10B981] rounded-lg"
                >
                  INTERVIEW
                </button>
                <button
                  class="px-3 py-2.5 font-semibold bg-transparent border border-[#EF4444] text-[#EF4444] rounded-lg"
                >
                  REJECTED
                </button>
              </div>
            </div>

            <button class="absolute top-7 right-7">
              <i
                class="fa-regular fa-trash-can border rounded-full border-[#64748B] p-2"
              ></i>
            </button>
        `;

        interviewCardSection.appendChild(div);
    }
}