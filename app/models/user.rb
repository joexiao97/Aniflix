# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    
    validates :username, :email, presence: true, uniqueness: true
    validates :password_digest, :session_token, presence: true
    validates :password, length:{minimum: 6, allow_nil: true}

    after_initialize :ensure_session_token

    attr_reader :password

    has_one :mylist,
    foreign_key: :user_id,
    class_name: :Mylist

    has_many :my_list_shows,
    through: :mylist,
    source: :show

    #FIGVAPER

    def self.find_by_credentials(username,password)
        user= User.find_by(username: username)
        return nil unless user && user.is_password?(password)
        return user
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def reset_session_token!
        self.update!(session_token: self.class.generate_session_token)
        self.session_token
    end
end