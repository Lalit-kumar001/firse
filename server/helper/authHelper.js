const bcrypt= require('bcrypt');

module.exports.hashPassword=async(password)=>{
    try {
        const saltRound=10;
        const hashedPassword= await bcrypt.hash(password,saltRound);
        return hashedPassword;
    } catch (error) {
      console.log(error);   
    }


}

module.exports.comparePassword = async(password,hashedPassword)=>{
    return bcrypt.compare(password,hashedPassword);
}