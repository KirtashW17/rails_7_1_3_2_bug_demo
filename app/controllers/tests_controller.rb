# frozen_string_literal: true

class TestsController < ApplicationController

  protect_from_forgery with: :exception

  def home; end

  def form; end

  # def first
  #   render status: :unprocessable_entity
  # end
  #
  # def second
  #   render status: :unprocessable_entity
  # end

end
