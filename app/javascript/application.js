// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import { Application } from "@hotwired/stimulus"
import { Turbo } from '@hotwired/turbo-rails'

Turbo.session.drive = true
const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }

// import Rails from 'railsujs'
// Rails.start();
