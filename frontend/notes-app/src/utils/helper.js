export const validateEmail =(email)=>{
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]=$/;
    return regex.test(email);
};
export const getInitials=(name)=>{
    if(!name) return "";
    const words = name.split(" ");
        
    return name[0].toUpperCase() + name.split(' ')[1][0].toUpperCase();
};