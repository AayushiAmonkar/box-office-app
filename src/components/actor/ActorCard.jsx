import React from "react";
import { StyledActorCard } from "./ActorCardStyled";

const ActorCard = ({ name, country, birthday, deathday, gender, image }) => {
  return (
    <StyledActorCard>
      <div className="img-wrapper">
        <img src={image} alt={name} />
      </div>

      <h1>
        {name} {gender ? `(${gender})` : null}
      </h1>

      <p>{country ? `Comes from ${country}` : `Country Not Known`}</p>
      {birthday ? <p>Born {birthday}</p> : null}
      <p className="deathday">{deathday ? `Died ${deathday}` : "Alive"}</p>
    </StyledActorCard>
  );
};

export default ActorCard;
