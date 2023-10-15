function changeFilterPosts() {
  const selectedValue = parseInt(localStorage.getItem("selectedValue"));

  // Sort the JSON data based on the selected option
  let sortedJson = [];
  switch (selectedValue) {
    case 0: // Newest (ID highest to lowest)
      sortedJson = jsonData.sort((a, b) => b.id - a.id);
      break;
    case 1: // Oldest (ID lowest to highest)
      sortedJson = jsonData.sort((a, b) => a.id - b.id);
      break;
    default:
      sortedJson = jsonData; // Default order
  }

  // Update jsonData with the sorted data
  jsonData = sortedJson;

  // Call the getWithToken function with the sorted data
  getWithToken(postsUrl, jsonData);
}

/**
 * @event
 * @description Event listener for the select element change event.
 */
selectElement.addEventListener("change", function () {
  localStorage.setItem("selectedValue", selectElement.value);
  handleSelectChange();
});