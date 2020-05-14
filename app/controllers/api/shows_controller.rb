class Api::ShowsController < ApplicationController

    def index
        @shows = Show.all
        render :index
    end

    def show
        @show = Show.find(params[:id])
        render :show
    end

    def mylist 
        @shows = current_user.my_list_shows
        if !@shows.empty? 
          render :index 
        else 
          render json: ["User has no videos in their list"], status: 404
        end 

    end 
end