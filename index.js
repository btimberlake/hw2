// Your code goes here:


let selectPicture = function(event)
{
//  console.debug($(this))
//  console.log(event)

// first get clicked image & url
  let thisImage = jQuery(this)
  let imageSrc = thisImage.attr("src")
// output to check
  console.log(thisImage)
  console.log(imageSrc)

// update main image
// hard-coded version first:
  //jQuery(jQuery("#main-image img")[0]).attr("src", "https://image.tmdb.org/t/p/w300/q0R4crx2SehcEEQEkYObktdeFy.jpg")
  jQuery("#main-image").attr("src",imageSrc)

}

  // new code:
  jQuery("img").on("click", selectPicture)
  
