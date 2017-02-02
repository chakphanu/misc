function province_onchange(pid)
{
  if(!pid)return;
  $.getJSON( "json/amphur/pid" + pid + ".json", function( data ) {
      // clear all except first
      $('#amphur').children('option:not(:first)').remove();

      // add other options
      $.each( data, function( key, val ) {
        $('#amphur').append($("<option></option>").attr("value",val.AMPHUR_ID).text(val.AMPHUR_NAME));
      });
    });
}

function amphur_onchange(aid)
{
  if(!aid)return;
  $.getJSON( "json/district/aid" + aid + ".json", function( data ) {
      // clear all except first
      $('#district').children('option:not(:first)').remove();

      // add other options
      $.each( data, function( key, val ) {
        $('#district').append($("<option></option>").attr("value",val.DISTRICT_ID).text(val.DISTRICT_NAME));
      });
    });
}

$(document).ready(function() {

  $( "#province" ).change(function(){
    province_onchange(this.value);
  });

  $( "#amphur" ).change(function(){
    amphur_onchange(this.value);
  });


  $.getJSON( "json/province.json", function( data ) {
      // clear all except first
      $('#province').children('option:not(:first)').remove();

      // add other options
      $.each( data, function( key, val ) {
        $('#province').append($("<option></option>").attr("value",val.PROVINCE_ID).text(val.PROVINCE_NAME));
      });
    });
});
