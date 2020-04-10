class Api::ShowsController < ApplicationController

    def index
        @shows = Show.all
        render :index
    end

    def show
        @show = Show.first
        render :show
    end

end