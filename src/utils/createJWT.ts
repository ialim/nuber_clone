import jwt from "jsonwebtoken";

const createJWT = (id: number): string => {
  const token = jwt.sign(
    {
      id,
    },
    "37NmDe87X3xtfALMqaBrGn2mHAdnLEYThfwn7gS3WgDsN"
  );
  return token;
};

export default createJWT;
