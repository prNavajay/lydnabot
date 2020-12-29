FROM node:12.19-slim

ENV USER=karma

# install python and make
RUN apt-get update && \
	apt-get install -y python3 build-essential && \
	apt-get purge -y --auto-remove
	
# create evobot user
RUN groupadd -r ${USER} && \
	useradd --create-home --home /home/evobot -r -g ${USER} ${USER}
	
# set up volume and user
USER ${USER}
WORKDIR /home/karma

COPY package*.json ./
RUN npm install
VOLUME [ "/home/karma" ]

COPY . .

ENTRYPOINT [ "node", "index.js" ]
