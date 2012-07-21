module UsersHelper
  
  def gravatar_for(user)
    if user.photo_url.blank?
      gravatar_url = "blank.png"
    else
      gravatar_url =  user.photo_url.to_s
    end 
    image_tag(gravatar_url, alt: user.name, class: "gravatar") 
  end 
   
end
