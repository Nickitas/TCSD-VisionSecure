import { useEffect, useState } from 'react';
import { 
    ExclamationCircleIcon, 
    CheckCircleIcon, 
    InformationCircleIcon, 
    XMarkIcon 
} from '@heroicons/react/24/outline';
import cls from './index.module.scss';

type MessageType = 'error' | 'success' | 'warning' | 'info';

interface MessageBoxProps {
    message?: string;
    type: MessageType;
    onClose?: () => void;
    autoClose?: number;
}

export const MessageBox = ({ message = '', type, onClose, autoClose }: MessageBoxProps) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (!autoClose) return;

        const timer = setTimeout(() => {
            setIsVisible(false);
            onClose?.();
        }, autoClose);

        return () => clearTimeout(timer);
    }, [autoClose, onClose]);

    if (!isVisible) return null;

    const baseClasses = 'p-4 rounded-lg shadow-md flex items-start gap-3 transition-all duration-300 border';
    const iconClasses = 'h-5 w-5 flex-shrink-0';

    const typeConfig = {
        error: {
            light: 'bg-red-50 text-red-800 border-red-200',
            dark: 'dark:bg-red-900/20 dark:text-red-200 dark:border-red-800',
            icon: <ExclamationCircleIcon className={`${iconClasses} text-red-500 dark:text-red-400`} />,
        },
        success: {
            light: 'bg-green-50 text-green-800 border-green-200',
            dark: 'dark:bg-green-900/20 dark:text-green-200 dark:border-green-800',
            icon: <CheckCircleIcon className={`${iconClasses} text-green-500 dark:text-green-400`} />,
        },
        warning: {
            light: 'bg-amber-50 text-amber-800 border-amber-200',
            dark: 'dark:bg-amber-900/20 dark:text-amber-200 dark:border-amber-800',
            icon: <ExclamationCircleIcon className={`${iconClasses} text-amber-500 dark:text-amber-400`} />,
        },
        info: {
            light: 'bg-blue-50 text-blue-800 border-blue-200',
            dark: 'dark:bg-blue-900/20 dark:text-blue-200 dark:border-blue-800',
            icon: <InformationCircleIcon className={`${iconClasses} text-blue-500 dark:text-blue-400`} />,
        },
    };

    return (
        <div
            className={`${baseClasses} ${typeConfig[type].light} ${typeConfig[type].dark} ${cls.animateFadeIn}`}
            role="alert"
        >
            {typeConfig[type].icon}
            <div className="flex-1 min-w-0">
                <p className="font-medium">{message}</p>
            </div>
            {onClose && (
                <button
                    onClick={() => {
                        setIsVisible(false);
                        onClose();
                    }}
                    className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors"
                    aria-label="Close"
                >
                    <XMarkIcon className="h-5 w-5" />
                </button>
            )}
        </div>
    );
};