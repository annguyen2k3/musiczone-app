const overlay = document.querySelector('.overlay');
const body = document.body;

//Login/Signup/Verify Modal
const loginModal = document.querySelector('.user-icon');
const loginContainer = document.querySelector('.login-container');
const signupContainer = document.querySelector('.signup-container');
const verifyContainer = document.querySelector('.verify-container');
const forgotContainer = document.querySelector('.forgot-container');
const newPasswordContainer = document.querySelector('.new-password-container');

const editProfileContainer = document.querySelector('.edit-profile-container');
const editSongContainer = document.querySelector('.edit-song-container');

overlay?.addEventListener('click', closeLoginModal);
overlay?.addEventListener('click', closeSignUpModal);
overlay?.addEventListener('click', closeVerifyModal);
overlay?.addEventListener('click', closeEditModal);
overlay?.addEventListener('click', closeEditProfileModal);
overlay?.addEventListener('click', closeEditSongModal);
overlay?.addEventListener('click', closeNewPasswordModal);

loginModal?.addEventListener('click', () => {
    if (!loginContainer.classList.contains('show')) {
        loginContainer.style.display = 'flex';
        setTimeout(() => {
            loginContainer.classList.add('show'); // Thêm class 'show' sau khi modal được hiển thị
        }, 10); // Để đảm bảo transition hoạt động
        overlay.style.display = 'block';
        body.style.overflow = 'hidden'; // Khóa cuộn trang
    } else {
        closeLoginModal();
    }
});

// Xử lý chuyển đổi giữa các modal
const signupButton = document.querySelector('.button-sign-up'); // Nút tạo tài khoản
const backToLoginButton = document.querySelector('.button-backto-login'); // Nút quay lại đăng nhập
const createAccountButton = document.querySelector('.button-create');
const forgotButton = document.querySelector('.button-forgot');
const forgotPasswordButton = document.querySelector('.button-forgot-password');
const verifyButton = document.querySelector('.button-verify');

signupButton?.addEventListener('click', () => {
    if (!signupContainer.classList.contains('show')) {
        loginContainer.classList.remove('show');
        loginContainer.style.display = 'none';
        signupContainer.style.display = 'flex';
        signupContainer.classList.add('show');
    } else {
        closeSignUpModal();
    }
});

backToLoginButton?.addEventListener('click', () => {
    signupContainer.classList.remove('show');
    signupContainer.style.display = 'none';
    loginContainer.style.display = 'flex';
    loginContainer.classList.add('show');
});

forgotButton?.addEventListener('click', () => {
    loginContainer.classList.remove('show');
    loginContainer.style.display = 'none';
    forgotContainer.style.display = 'flex';
    forgotContainer.classList.add('show');
});

forgotPasswordButton?.addEventListener('click', () => {
    if (!verifyContainer.classList.contains('show')) {
        forgotContainer.classList.remove('show');
        forgotContainer.style.display = 'none';
        verifyContainer.style.display = 'flex';
        verifyContainer.classList.add('show');
    } else {
        closeSignUpModal();
    }
});

verifyButton?.addEventListener('click', () => {
    if (!newPasswordContainer.classList.contains('show')) {
        forgotContainer.classList.remove('show');
        forgotContainer.style.display = 'none';
        // newPasswordContainer.style.display = 'flex';
        // newPasswordContainer.classList.add('show');
    } else {
        closeNewPasswordModal();
    }
});

// Xử lý khi click chỉnh sửa bài nhạc
const btnChange = document.querySelectorAll('.btn-change');
const editContainer = document.querySelector('.edit-multiple-song');

btnChange.forEach((button) => {
    button.addEventListener('click', () => {
        if (!editContainer.classList.contains('show')) {
            editContainer.style.display = 'block';
            setTimeout(() => {
                editContainer.classList.add('show');
            }, 10); // Để đảm bảo transition hoạt động
            overlay.style.display = 'block';
            body.style.overflow = 'hidden';
        } else {
            closeEditModal();
        }
    });
});

// Xử lý khi click edit profile
const btnEditProfile = document.querySelector('#profile .edit');
btnEditProfile.addEventListener('click', () => {
    if (!editProfileContainer.classList.contains('show')) {
        editProfileContainer.style.display = 'block';
        setTimeout(() => {
            editProfileContainer.classList.add('show');
        }, 10); // Để đảm bảo transition hoạt động
        overlay.style.display = 'block';
        body.style.overflow = 'hidden';
        app.handleEditProfile();
    } else {
        closeEditProfileModal();
    }
});

// Xử lý khi click edit song profile
const btnEditSong = document.querySelector('#profile .btn-edit-song');
btnEditSong?.addEventListener('click', () => {
    if (!editSongContainer.classList.contains('show')) {
        editSongContainer.style.display = 'block';
        setTimeout(() => {
            editSongContainer.classList.add('show');
        }, 10); // Để đảm bảo transition hoạt động
        overlay.style.display = 'block';
        body.style.overflow = 'hidden';
    } else {
        closeEditSongModal();
    }
});

function closeLoginModal() {
    loginContainer.classList.remove('show');
    overlay.style.display = 'none';
    body.style.overflow = 'auto';

    // Đặt timeout để ẩn loginContainer sau khi hiệu ứng hoàn tất
    setTimeout(() => {
        loginContainer.style.display = 'none';
    }, 300); // Thời gian trễ bằng với thời gian hiệu ứng
}

function closeSignUpModal() {
    signupContainer.classList.remove('show');
    overlay.style.display = 'none';
    body.style.overflow = 'auto';

    // Đặt timeout để ẩn loginContainer sau khi hiệu ứng hoàn tất
    setTimeout(() => {
        signupContainer.style.display = 'none';
    }, 300); // Thời gian trễ bằng với thời gian hiệu ứng
}

function closeVerifyModal() {
    verifyContainer.classList.remove('show');
    overlay.style.display = 'none';
    body.style.overflow = 'auto';

    // Đặt timeout để ẩn loginContainer sau khi hiệu ứng hoàn tất
    setTimeout(() => {
        verifyContainer.style.display = 'none';
    }, 300); // Thời gian trễ bằng với thời gian hiệu ứng
}

function closeNewPasswordModal() {
    newPasswordContainer.classList.remove('show');
    overlay.style.display = 'none';
    body.style.overflow = 'auto';

    // Đặt timeout để ẩn loginContainer sau khi hiệu ứng hoàn tất
    setTimeout(() => {
        newPasswordContainer.style.display = 'none';
    }, 300); // Thời gian trễ bằng với thời gian hiệu ứng
}

function closeEditModal() {
    editContainer?.classList.remove('show'); // Loại bỏ class 'show'
    overlay.style.display = 'none'; // Ẩn overlay
    body.style.overflow = 'auto'; // Mở khóa cuộn trang

    // Đặt timeout để ẩn editContainer sau khi hiệu ứng hoàn tất
    setTimeout(() => {
        editContainer.style.display = 'none';
    }, 300); // Thời gian trễ bằng với thời gian hiệu ứng
}

function closeEditProfileModal() {
    editProfileContainer?.classList.remove('show'); // Loại bỏ class 'show'
    overlay.style.display = 'none'; // Ẩn overlay
    body.style.overflow = 'auto'; // Mở khóa cuộn trang

    // Đặt timeout để ẩn editContainer sau khi hiệu ứng hoàn tất
    setTimeout(() => {
        editProfileContainer.style.display = 'none';
    }, 300); // Thời gian trễ bằng với thời gian hiệu ứng
}

function closeEditSongModal() {
    editSongContainer?.classList.remove('show'); // Loại bỏ class 'show'
    overlay.style.display = 'none'; // Ẩn overlay
    body.style.overflow = 'auto'; // Mở khóa cuộn trang

    // Đặt timeout để ẩn editContainer sau khi hiệu ứng hoàn tất
    setTimeout(() => {
        editSongContainer.style.display = 'none';
    }, 300); // Thời gian trễ bằng với thời gian hiệu ứng
}
