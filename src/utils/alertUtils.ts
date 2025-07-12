import swal, { type SweetAlertIcon } from 'sweetalert2'

export const successAlertModal = (
    text: string = '',
    theme : string,
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
    text: string = '',
    theme : string,
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
    title = 'آیا مطمئن هستید؟',
    text = '',
    theme : string,
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