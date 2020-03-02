$(document).ready(function() {
    
    $("#btn-modal1").click(function() {
        $("#modal1").modal({backdrop: false});
    });

    $("#modal1-sm").click(function() {
        $("#modal1-dialog").addClass("modal-sm");
        $("#modal1-dialog").removeClass("modal-lg modal-xl");
    });
    $("#modal1-lg").click(function() {
        $("#modal1-dialog").addClass("modal-lg");
        $("#modal1-dialog").removeClass("modal-sm modal-xl");
    });
    $("#modal1-xl").click(function() {
        $("#modal1-dialog").addClass("modal-xl");
        $("#modal1-dialog").removeClass("modal-lg modal-sm");
    });
    $("#modal1-nm").click(function() {
        $("#modal1-dialog").removeClass("modal-sm modal-lg modal-xl");
    });


    $("#btn-modal2").click(function() {
        $("#modal2").modal({backdrop: false});
    });

    $("#modal2-sm").click(function() {
        $("#modal2-dialog").addClass("modal-sm");
        $("#modal2-dialog").removeClass("modal-lg modal-xl");
    });
    $("#modal2-lg").click(function() {
        $("#modal2-dialog").addClass("modal-lg");
        $("#modal2-dialog").removeClass("modal-sm modal-xl");
    });
    $("#modal2-xl").click(function() {
        $("#modal2-dialog").addClass("modal-xl");
        $("#modal2-dialog").removeClass("modal-lg modal-sm");
    });
    $("#modal2-nm").click(function() {
        $("#modal2-dialog").removeClass("modal-sm modal-lg modal-xl");
    });
})