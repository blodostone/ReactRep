

const birthD = (birthDate) => {
    const ageInMiliSec = 31536000000;
    return Math.floor((new Date() - new Date(birthDate)) / ageInMiliSec);
};

export default birthD;
  