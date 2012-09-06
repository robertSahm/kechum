class ApplicationController < ActionController::Base
  helper :all
  protect_from_forgery
  include SessionsHelper
  
  before_filter :prepare_for_mobile

  private
  
     def mobile_device?
      if session[:mobile]
        session[:mobile] == "1"
      else
       # request.user_agent =~ /Mobile|webOS/
      end
     end

    helper_method :mobile_device?
    
    def prepare_for_mobile
      session[:mobile] = params[:mobile] if params[:mobile]
      # request.format   = :mobile if mobile_device?
    end
  
end
