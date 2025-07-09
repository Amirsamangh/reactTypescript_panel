import swal, { type SweetAlertIcon } from 'sweetalert2'

export const successAlertModal = (
    theme : string,
    text: string = '',
    title: string = 'عملیات موفق',
    icon: SweetAlertIcon = 'success'
) => {
    return swal.fire({
        //position,
        icon,
        text,
        title,
        showConfirmButton: true,
        // timer: 3000,
        backdrop: true,
        background: theme == 'dark' ? '#375267' : '#F9F3EF',
        color: theme == 'dark' ? '#D2C1B6' : '#375267',
    })
}
export const errorAlertModal = (
    theme : string,
    text: string = '',
    title: string = 'عملیات موفق',
    icon: SweetAlertIcon = 'error'
) => {
    return swal.fire({
        //position,
        icon,
        text,
        title,
        showConfirmButton: true,
        // timer: 3000,
        backdrop: true,
        background: theme == 'dark' ? '#375267' : '#F9F3EF',
        color: theme == 'dark' ? '#D2C1B6' : '#375267',
    })
}

export const ConfirmAlert = (
    theme : string,
    text = '',
    title = 'آیا مطمئن هستید؟',
    icon: SweetAlertIcon = 'warning',
    confirmButtonColor = '#55bb55',
    confirmButtonText = 'تایید',
) => {
    
    return swal.fire({
        icon,
        title,
        text,
        showCancelButton: true,
        confirmButtonText,
        confirmButtonColor,
        cancelButtonColor: '#cc5555',
        cancelButtonText: 'انصراف',
        background: theme == 'dark' ? '#375267' : '#F9F3EF',
        color: theme == 'dark' ? '#D2C1B6' : '#375267',
    })
}