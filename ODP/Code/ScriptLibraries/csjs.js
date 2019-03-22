var silos = {
	init : function() {
		$.ajax({
		    type: 'GET',
		    url: "rest.xsp/backlog",
		    contentType: 'application/json',
		    dataType: 'json',
		    cache: false,
		    success: function(response) {
				all = response;

				for (var x=0;x<all.length;x++) {
					$("[data-status='" + all[x].status + "']").append("<div data-docid='" + all[x]["@unid"] + "' class='tile " + all[x]["@unid"] + "'>" + all[x].item + "</div>");
				}
				var tableList = $('.silo').sortable({
					cursor: 'move',
					helper: 'clone',
					connectWith: '.silo',
					items: ".tile",
					start : function() {
						
					},
					stop : function(event, ui) {
						silos.updateStatus($(ui.item).attr("data-docid"));
					}
				  }); // end sortable
		   } // end success
		});
	},
	updateStatus : function(docid) {
		var newStatus = $("."+docid).parent().attr("data-status");
		$.ajax({
		    type: 'POST',
		    url: "rest.xsp/updateStatus?docid="+docid + "&status="+newStatus,
		    contentType: 'application/json',
		    dataType: 'json',
		    cache: false,
		    success: function(response) {
		    	
		    }
		});
	}
}