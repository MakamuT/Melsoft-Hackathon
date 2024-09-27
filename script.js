// Partnerships
const partnerships = [
    { name: "Company A", logo: "company-a-logo.png" },
    { name: "Company B", logo: "company-b-logo.png" },
    { name: "Company C", logo: "company-c-logo.png" },
  ];
  
  const partnersList = document.getElementById("partners-list");
  
  partnerships.forEach((partnership) => {
    const partnerItem = document.createElement("li");
    partnerItem.innerHTML = `<img src="${partnership.logo}" alt="${partnership.name}"> ${partnership.name}`;
    partnersList.appendChild(partnerItem);
  });
  
  // Job Matching
  const jobSearchForm = document.getElementById("job-search-form");
  jobSearchForm.addEventListener("submit", function (event) {
    event.preventDefault();
  
    const jobTitle = document.getElementById("job-title").value;
    const jobLocation = document.getElementById("job-location").value;
  
    const matchingJobs = findMatchingJobs(jobTitle, jobLocation);
  
    const jobResults = document.getElementById("job-results");
    jobResults.innerHTML = ""; // Clear previous results
  
    if (matchingJobs.length > 0) {
      matchingJobs.forEach((job) => {
        const jobItem = document.createElement("li");
        jobItem.textContent = `${job.title} - ${job.location}`;
        jobResults.appendChild(jobItem);
      });
    } else {
      jobResults.textContent = "No jobs found matching your criteria.";
    }
  });
  
  function findMatchingJobs(title, location) {
    // This function should search a database or predefined list of jobs.
    // For demo purposes, we'll use a hardcoded list.
    const jobs = [
      { title: "Software Engineer", location: "New York" },
      { title: "Data Analyst", location: "Los Angeles" },
      { title: "UI/UX Designer", location: "San Francisco" },
    ];
  
    return jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(title.toLowerCase()) &&
        job.location.toLowerCase().includes(location.toLowerCase())
    );
  }
  