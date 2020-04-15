class Api::ShowsController < ApplicationController

    def index
        @shows = Show.all
        render :index
    end

    def show
        @show = Show.find(params[:id])
        render :show
    end

end