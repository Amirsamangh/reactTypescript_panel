// import { toast, type TypeOptions } from "react-toastify";
import { toast } from "sonner"

// export const showToast = (
//     text: string,
//     icon: TypeOptions = 'info',
//     autoClose?: number | false
// ) => {
//     return toast(text, {
//         closeOnClick: true,
//         autoClose,
//         type: icon,
//         rtl: true,
//     })
// }

// export const errorToast = (text = 'عملیات ناموفق') => {
//     return showToast(text, 'error')
// }

// export const successToast = (text = 'عملیات موفق') => {
//     return showToast(text, 'success')
// }

export const showToast = (text: string) => {
    return toast(text, {
        dismissible: true,
        duration: 3000,
        action: {
            label: 'فهمیدم',
            onClick: () => toast.dismiss
        },
        closeButton: false,
        richColors: true,
    })
}

export const errorToast = (text = "عملیات ناموفق") => {
    return toast.error(text, {
        dismissible: true,
        duration: 4000,
        action: {
            label: 'فهمیدم',
            onClick: () => toast.dismiss
        },
        closeButton: false,
        richColors: true,
        actionButtonStyle: {
            'backgroundColor': "salmon",
        },
    })
}

export const successToast = (text = "عملیات موفق") => {
    return toast.success(text, {
        dismissible: true,
        duration: 2000,
        action: {
            label: 'فهمیدم',
            onClick: () => toast.dismiss,
        },
        closeButton: false,
        richColors: true,
        actionButtonStyle: {
            'backgroundColor': "lightgray",
            'color': 'darkgreen'
        },
    })
}
