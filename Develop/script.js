  $(function () {

    // Getting date in specific format

    let currentDate = dayjs()
    let formattedDate = currentDate.format('dddd, MMMM Do');

    // Setting headerdate id as the date

    $("#headerdate").text(formattedDate);

    // Iterating through each time block

    $(".time-block").each(function() {
      
      // Getting hour variables for conditionals

      var hourFromId = parseInt($(this).attr("id"));
      let currentHour = dayjs().hour() 

      // Manipulating classes based off conditionals

      $(this).removeClass().addClass("row time-block");

      if (hourFromId == currentHour) {
        $(this).addClass("present")
      } else if (hourFromId > currentHour) {
        $(this).addClass("future")
      } else if (hourFromId < currentHour) {
        $(this).addClass("past")
      }

    });


    // Saves description into local storage upon clicking save button

    $(".saveBtn").click(function() {

        var blockId = $(this).closest('.time-block').attr('id');

        var descriptionValue = $(this).siblings('.description').val();

        localStorage.setItem(blockId, descriptionValue);
    });

    // Chceks local storage for info

    $(".time-block").each(function() {
        var blockId = $(this).attr('id');
        var savedValue = localStorage.getItem(blockId);

        if (savedValue) {
            $(this).find(".description").val(savedValue);
        }
    });
  });
