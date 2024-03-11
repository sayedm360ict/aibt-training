import { message } from 'antd';
type NotificationType = 'success' | 'info' | 'warning' | 'error';

const notification = (
  type: NotificationType,
  content: string,
  duration?: number
) => {
  const showMessage = () => {
    message[type]({
      content,
      duration,
    });
  };

  return showMessage();
};

export default notification;
