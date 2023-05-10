FROM php:8.2.5-buster

# Install system dependencies
RUN apt-get update && apt-get install -y \
    # Other dependencies if needed \
    && rm -rf /var/lib/apt/lists/*

# Install OpenSSL and its development headers
RUN apt-get update && apt-get install -y \
    openssl \
    libssl-dev \
    && rm -rf /var/lib/apt/lists/*

# Install MongoDB extension with SSL support
RUN pecl install mongodb \
    && docker-php-ext-enable mongodb

# Set the working directory in the container
WORKDIR /var/www/html

# Copy the composer.json and composer.lock files to the container
COPY composer.json composer.lock ./

# Install dependencies with Composer
RUN apt-get update && apt-get install -y \
    zip \
    unzip \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer install --no-scripts --no-autoloader

# Copy the rest of the application code to the container
COPY . .

# Generate the autoloader
RUN composer dump-autoload --optimize

# Set permissions for storage and cache directories
RUN chown -R www-data:www-data storage bootstrap/cache

# Expose port 8000
EXPOSE 8000

# Start the PHP development server
CMD ["php", "artisan", "serve", "--host", "0.0.0.0", "--port", "8000"]
