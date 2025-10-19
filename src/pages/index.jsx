import React from "react";
import Nav from "../components/Nav";
import mentor from "../assets/mentor.png";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="bg-white">
        {/* Hero Section */}
        <section>
          <div>
            <h1>
              <span>Elevate Hub:</span>
              <br />
              Your journey, our guidance
            </h1>
            <p>
              Every great achiever was inspired by a greater mentor. Find yours
              today!
            </p>
            <div className="mt-8">
              <NavLink to="">
                <button>Match with a Mentor</button>
              </NavLink>
            </div>
          </div>

          {/* image section */}
          <div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                alt=""
              />
            </div>
          </div>
        </section>

        {/* About section */}
        <section>
          <div>
            <div>
              <img src={mentor} alt="elevatementorhub image" />
            </div>
            <div>
              <h5>Elevate Your Career with ElevateHub</h5>
            </div>
            <p>
              <span>Elevate</span> is the ultimate platform designed to connect
              you with experienced mentors who can help you unlock your
              potential. Whether you are seeking career advice, skill
              developement or personal growth, ElevateHub is here to guide you
              every step of the way.
            </p>
          </div>
          <button>Join ElevateHub</button>
          <a href="#">Discover More</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            width="24"
            height="24"
          >
            <path
              fill="#34d8eb"
              d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"
            />
          </svg>
        </section>

        {/* About section */}
        <section>
          <div>
            <div>
              <h2>Unlock Your Growth Journey with ElevateHub</h2>
            </div>
            <p>Hub is designed to connect you with the right mentors, guiding you to success. It's enhancing your skills or reaching career goals, we're here to help you thrive.</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
