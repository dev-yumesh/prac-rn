export const prescriptionArrayName = "prescriptionArray"

export const generateId = () => {
    return new Date().getMilliseconds()
}

export const PRESCRIPTION_STATUS = {
    submitted:"Submitted",
    approved:"Approved",
    denied:"Denied"
}