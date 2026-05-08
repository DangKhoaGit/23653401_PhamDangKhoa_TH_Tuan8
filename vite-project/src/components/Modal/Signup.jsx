import React from 'react';
import { useEffect } from 'react';

const SignUpModal = ({isOpen , onClose}) => {
  if (!isOpen) return null;
  // --- Các biến Styles (Thay thế cho Tailwind) ---
  const styles = {
    // Đây là lớp phủ toàn màn hình
    overlay: {
      position: 'fixed',    // Cố định vị trí
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Nền đen mờ 50%
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,         // Đảm bảo luôn nằm trên cùng
      backdropFilter: 'blur(4px)', // Làm mờ nhẹ trang chủ phía sau (tùy chọn)
    },
    // Đây là cái khung trắng chứa form
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '24px',
      padding: '40px',
      width: '90%',         // Co giãn tốt trên mobile
      maxWidth: '450px',
      position: 'relative', // Để có thể đặt nút X đóng modal nếu muốn
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f3f4f6',
      fontFamily: 'Arial, sans-serif',
      padding: '20px'
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '24px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
      padding: '40px',
      width: '100%',
      maxWidth: '450px',
    },
    title: {
      fontSize: '32px',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '32px',
      color: '#111827'
    },
    row: {
      display: 'flex',
      gap: '15px',
      marginBottom: '20px'
    },
    formGroup: {
      marginBottom: '20px',
      flex: 1
    },
    label: {
      display: 'block',
      fontSize: '14px',
      color: '#6b7280',
      marginBottom: '8px'
    },
    input: {
      width: '100%',
      padding: '12px 16px',
      backgroundColor: '#f9fafb',
      border: '1px solid #e5e7eb',
      borderRadius: '10px',
      fontSize: '14px',
      outline: 'none',
      boxSizing: 'border-box'
    },
    passwordWrapper: {
      position: 'relative'
    },
    eyeIcon: {
      position: 'absolute',
      right: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      cursor: 'pointer',
      opacity: 0.4
    },
    checkboxContainer: {
      display: 'flex',
      gap: '10px',
      alignItems: 'flex-start',
      margin: '20px 0'
    },
    checkbox: {
      marginTop: '4px',
      accentColor: '#f64b81'
    },
    termsText: {
      fontSize: '14px',
      color: '#374151',
      lineHeight: '1.4'
    },
    pinkLink: {
      color: '#f64b81',
      textDecoration: 'none',
      fontWeight: '500',
      cursor: 'pointer'
    },
    btnSubmit: {
      width: '100%',
      backgroundColor: '#f64b81',
      color: '#white',
      border: 'none',
      padding: '14px',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      color: 'white',
      marginTop: '10px'
    },
    loginText: {
      textAlign: 'center',
      marginTop: '24px',
      fontSize: '14px',
      color: '#374151'
    },
    dividerContainer: {
      display: 'flex',
      alignItems: 'center',
      margin: '30px 0',
      color: '#9ca3af',
      fontSize: '12px'
    },
    line: {
      flex: 1,
      height: '1px',
      backgroundColor: '#e5e7eb'
    },
    socialContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px'
    },
    socialBtn: (color) => ({
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      backgroundColor: color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      fontSize: '20px',
      fontWeight: 'bold'
    })
  };

  const ref = React.useRef();

 

  return (
    <div style={styles.overlay} onClick={onClose} onScroll={(e) => e.stopPropagation()}>
      {/* onClick={onClose} ở overlay giúp click ra ngoài là đóng modal */}
      
      <div style={styles.card} onClick={(e) => e.stopPropagation()}>
        {/* stopPropagation để khi click vào bên trong form thì KHÔNG bị đóng modal */}
        
        <h1 style={styles.title}>Sign up</h1>
        
        <form onSubmit={(e) => e.preventDefault()}>
          <div style={styles.row}>
            <div style={styles.formGroup}>
              <label style={styles.label}>First name</label>
              <input style={styles.input} type="text" placeholder="Input first name" />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Last name</label>
              <input style={styles.input} type="text" placeholder="Input last name" />
            </div>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input style={styles.input} type="email" placeholder="example.email@gmail.com" />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <div style={styles.passwordWrapper}>
              <input style={styles.input} type="password" placeholder="Enter at least 8+ characters" />
              <span style={styles.eyeIcon}>👁️</span>
            </div>
          </div>

          <div style={styles.checkboxContainer}>
            <input type="checkbox" style={styles.checkbox} defaultChecked />
            <span style={styles.termsText}>
              By signing up, I agree with the <span style={styles.pinkLink}>Terms of Use</span> & <span style={styles.pinkLink}>Privacy Policy</span>
            </span>
          </div>

          <button style={styles.btnSubmit}>Sign up</button>
        </form>

        <p style={styles.loginText}>
          Already have an account? <span style={styles.pinkLink}>Log in</span>
        </p>

        <div style={styles.dividerContainer}>
          <div style={styles.line}></div>
          <span style={{ padding: '0 10px' }}>OR</span>
          <div style={styles.line}></div>
        </div>

        <div style={styles.socialContainer}>
          <button style={styles.socialBtn('#c51f14')}>G</button>
          <button style={styles.socialBtn('#3b5998')}>f</button>
          <button style={styles.socialBtn('#1a1a1b')}></button>
        </div>
        
      </div>
    </div>
  );
};

export default SignUpModal;