import React, { useEffect, useState } from "react";
import axios from "axios";

const GithubStars = ({classes}) => {

	const [starCount, setStarCount] = useState(1);

  const fetchStarCount = () => {
    axios
      .get("https://api.github.com/repos/victor-cody/codehouse", {
        headers: {},
      })
      .then((response) => {
        setStarCount(response.data.stargazers_count);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // fetch on load once
  useEffect(() => {
    fetchStarCount();
  }, []);

	return (
		<a
			className={`rounded-sm bg-dark text-light shine ml-1 px-3 py-2 capitalize font-weight-bold d-flex align-items-center justify-content-center ${classes} `}
			href="https://github.com/victor-cody/codehouse"
			target="_blank"
			rel="noreferrer"
		>
			Stars <span className="poppins mx-1">{starCount}</span>
			<i className="bi bi-github h1"></i>
		</a>
	);
};

export default GithubStars;
