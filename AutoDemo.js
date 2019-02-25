//Hide certain fields on load
$(document).ready(function () {
    $("#imageSelect").hide();
    $("#retentionPd").hide();
    $("#createCopy").hide();

    // Change Prefix depending on category type
    $("select[name='category']").change(function () {
        var category = $(this).val();
        switch (category) {
            case "prod":
                $("#prefix").text("SP");
                break;
            case "tools":
                $("#prefix").text("ST");
                break;
            case "load/perf":
                $("#prefix").text("SL");
                break;
            case "dev":
                $("#prefix").text("SD");
                break;
            case "qa":
                $("#prefix").text("SQ");
                break;
        }
    });


    // New way to toggle OS images by deleting and appending
    $("input[name='os']").change(function(){
        $("#imageSelect").slideDown("slow");
        var osType = $("input[name='os']:checked").val();

        if(osType == "windows"){
            $("#image").find("option").remove().end().append(
                "<option value='win2016r2'>Windows 2016 R2</option>",
                "<option value='win2012r2'>Windows 2012 R2</option>",
                "<option value='win2008r2'>Windows 2008 R2</option>"
            );
        }

        if(osType == "linux"){
            $("#image").find("option").remove().end().append(
                "<option value='rhel7'>RHE Linux 7</option>",
                "<option value='rhel6'>RHE Linux 6</option>"
            );
        }

        if(osType == "centos"){
            $("#image").find("option").remove().end().append(
                "<option value='7.6-1810'>7.6-1810</option>",
                "<option value='7.5-1804'>7.5-1804</option>",
                "<option value='7.4-1708'>7.4-1708</option>"
            );
        }
    });

    // Toggle Backup settings
    $("input[name='backup']").change(function () {
        if ($("input[name='backup']:checked").val() == "yes") {
            $("#retentionPd").slideDown();
            $("#createCopy").slideDown();
        }

        if ($("input[name='backup']:checked").val() == "no") {
            $("#retentionPd").slideUp();
            $("#createCopy").slideUp();
        }
    });

    // Function to handle reset button
    $("#reset").click(function (event) {
        $("#autoform").get(0).reset();
    });

    // Submit handler
    $("#autoform").submit(function (event) {
        event.preventDefault();

        // Send values to #submitText
        $("#submitText").html(
            "Category = " + $("select[name='category']").val() + "<br>" +
            "Name = " + $("input[name='hostname']").val() + $("input[name='hostnameNum']").val() + "<br>" +
            "Quantity = " + $("select[name='quantity']").val() + "<br>" +
            "Type = " + $("select[name='type']").val() + "<br>" +
            "OS = " + $("input[name='os']").val() + "<br>" +
            "Image = " + $("select[name='image']").val() + "<br>" +
            "Backup = " + $("input[name='backup']:checked").val() + "<br>" +
            "Retention Pd = " + $("select[name='retentionPd']").val() + "<br>" +
            "Create Copy = " + $("input[name='createCopy']:checked").val() + "<br>" +
            "DR = " + $("input[name='dr']:checked").val() + "<br>"

        );
    });

});