<?php
/**
 * The template for displaying single pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package academyoflearning
 */

$image_id = get_post_thumbnail_id();
$image = wp_get_attachment_image_src($image_id, 'full');
if (empty($image)) {
	$image[0] = get_template_directory_uri() . '/public/images/ontario.jpg';
}

?>
<main class="main-content aolcc-inner-pages halifax-career-page ">
	<!-- banner-section-start  -->
	<section class=" inner-page-banner-section lazybg halifax-career-banner">
		<img class="hellifax-bg-img" src="<?php echo get_template_directory_uri(); ?>/public/images/banner-image.jpg"  alt="banner-image" />
		<div class="container">
            <h1>
			<span>ACADEMY OF LEARNING CAREER COLLEGE</span>
				Career College in Halifax</h1>
            <p>Since 1992, our campus has been transforming students into professionals!</p>
			<div class="halifax-btn-wrapper">
				<a href="#" class="orange-btn" title="PROGRAMS" >PROGRAMS</a>			
				<a href="#" class="white-btn" title="Book Appointment" >Book Appointment</a>
			</div>
			<!-- <ul class="breadcrumb">
				<li><a href="<?php echo home_url(); ?>" title="Home">Home</a></li>
				<?php
				$breadcrumbs_common_title = get_field('breadcrumbs_common_title');
				if ($breadcrumbs_common_title != '') {
					?>
					<li class="active"><?php echo $breadcrumbs_common_title; ?></li>
					<?php
				}
				?>
			</ul> -->
		</div>
		<div class="tri-color-bar-wrapper">
			<ul>
				<li class="blue-bar"></li>
				<li class="green-bar"></li>
				<li class="orange-bar"></li>
			</ul>
		</div>
	</section>
	<!-- banner-section-end  -->
	<!-- flexible-training-section-start  -->
	<section class="flexible-training">
		<div class="container">
			<div class="flexible-training-wrapper">
				<div class="flexible-training-text">					
					<h2>Student-Focused, Flexible
                        Training in Halifax</h2>
					<p>If you want flexible training to get you career ready, search no more. We offer a wide variety of quality, flexible courses in Halifax.</p> 
					<p>With our training, we have done a “180” to focus on learning rather than teaching. We make sure that each of our programs meets students' unique needs.</p>
				</div>
				<div class="flexible-training-img">
				<img src="<?php echo get_template_directory_uri(); ?>/public/images/institute-building-image.jpg"  alt="grid-images" />
				</div>
			</div>
		</div>
	</section>
	<!-- flexible-training-section-end -->
	<!-- find-us-section-start -->
	<section class="find-us-section ">
		<img class="hellifax-bg-img" src="<?php echo get_template_directory_uri(); ?>/public/images/map-bg.jpg"  alt="map-bg" />
		<div class="container">
			<h2><span>Location</span>How to find us</h2>
        	<p>Halifax is a vibrant city which celebrates its history and enjoys its present. This campus location is conveniently located close to shopping and a bus terminal.</p>
			<ul>
   				<li>
	   				<a href="#" title="Address" class="orange-text">
            			<em>
            				<img src="<?php echo get_template_directory_uri(); ?>/public/images/location(1).svg"  alt="location" />
            			</em>
        				<span>Suite 155- 1st Floor, 6960 Mumford Road, Mumford Professional Centre,
                		Halifax, NS B3L 4P1
						</span>
					</a>
    			</li>
				<li>	
					<a href="tel:902-455-3395" title="Call-us">
						<em>
							<img src="<?php echo get_template_directory_uri(); ?>/public/images/phone.svg"  alt="map-bg" />
						</em>
						<span>902-455-3395</span>
					</a>
				</li>
				<li>
					<a href="mailto:dyeomans@academyoflearning.com" title="dyeomans@academyoflearning.com">
						<em>
							<img src="<?php echo get_template_directory_uri(); ?>/public/images/email.svg"  alt="map-bg" />
						</em>
						<span>dyeomans@academyoflearning.com</span></a>
				</li>
			</ul>
		</div>
	</section>
	<!-- find-us-section-end -->
	<section class="alternative-option-text">
		<div class="container">
			<h2>A Great Alternative To Traditional Colleges in Halifax</h2>
			<div class="alternative-text-wrapper">
				<ul class="alternative-text-inner">
					<li>
						<p>At our college in Halifax, we truly care and take pride in our graduate success! We welcome everyone to join our family on campus. And we are there for you to offer support and help you reach your career and life goals.</p>
					</li>
					<li>
						<h3>Learn To The Beat of Your Own Drum:</h3>
						<p>All our programs and courses are self-directed. So you can learn at your own pace. And you won’t find any peer competition here. The learning environment is friendly for everyone!</p>
					</li>
					<li>
						<h3>Support System:</h3>
						<p>Our awesome team of coaches have you COVERED. They are available at a moment’s notice to coach you, check on you, and even give you a HELPING hand when required.</p>
					</li>
 					<li>
						<h3>No Computer Skills Necessary:</h3>
						<p>“But I’m terrible with computers” You say? We provide even the most digitally inexperienced students with the essentials. We will always help you move forward and progress at your own pace.</p>
					</li>
				</ul>
				<div class="alternative-text-inner">
					<li>
						<h3>Flexibility is Our Game:</h3>
						<p>We offer a flexible schedule unlike any public college in Halifax. The continuous learning process allows you to enrol and start training any time of year. Missed a class? No big deal, lessons are available at other times more convenient for you. </p>
					</li>
					<li>
						<p>We have maintained our core approach to education, only now with a constantly rising number of success stories! Our training continually evolves to meet the demands of today’s job market. As a result, graduates are ready and eager for the workforce. </p>
					</li>
					<li>
						<p>See why Academy of Learning Career College stands above other public colleges in Halifax. Contact us to schedule a campus visit, discuss your future, or explore our variety of different 
							<a href="#" title="programs and courses in Halifax.">programs and courses in Halifax.</a> </p>
					</li>
					<li>
						<i>We offer free counselling for career development!</i>
					</li>			
				</div>
			</div>
		</div>
	</section>
	<!-- orange page menu start -->
	<!-- <div class="page-menu-outer">
		<div class="page-menu">
			<div class="container">
				<div class="page-menu-wrapper">
					<?php
					$aolcc_belleville_title_text = get_field('aolcc_belleville_title_text');
					if ($aolcc_belleville_title_text != '') {
						?>
						<h2 class="menu-title"><?php echo $aolcc_belleville_title_text; ?></h2>
						<?php
					}
					?>
					<div class="menu-links-wrapper">
						<?php
						$programs_menu_title_text = get_field('programs_menu_title_text');
						$contact_us_menu_title_text = get_field('contact_us_menu_title_text');
						$directions_menu_title_text = get_field('directions_menu_title_text');
						$contact_page_url = get_field('contact_page_url', 'options');
						?>
						<ul class="menu-links">
							<?php
							if ($programs_menu_title_text != '') {
								$args = array(
									'post_parent' => get_the_ID(),
									'posts_per_page' => 1,
									'post_type' => 'location',
								);
								$programs_permalink = '#';
								$the_query = new WP_Query($args);
								if ($the_query->have_posts()) :
									while ($the_query->have_posts()) : $the_query->the_post();
										$programs_permalink = get_the_permalink();
									endwhile;
								endif;
								wp_reset_query();
								?>
								<li><a href="<?php echo $programs_permalink; ?>" title="<?php echo $programs_menu_title_text; ?>" class="active"><?php echo $programs_menu_title_text; ?></a></li>
								<?php
							}

							if ($contact_us_menu_title_text != '') {
								?>
								<li><a href="#" title="<?php echo $contact_us_menu_title_text; ?>" data-id="contact-form"><?php echo $contact_us_menu_title_text; ?></a></li>
								<?php
							}
							if ($directions_menu_title_text != '') {
								?>
								<li><a href="#" title="<?php echo $directions_menu_title_text; ?>" data-id="map-directions"><?php echo $directions_menu_title_text; ?></a></li>
								<?php
							}
							?>
						</ul>

						<div class="hamburger-menu">
							<i class="fas fa-bars"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div> -->
	<!-- orange page menu end -->
	<!-- aolcc-images-section-start  -->
	<section class="aolcc-images-section">
		<div class="images-grid ">
			<div class="images-grid-item left">
				<div class="sub-grid top">
					<div class="sub-grid-item">
						<div class="img-wrapper left-top-left">
							<img src="<?php echo get_template_directory_uri(); ?>/public/images/grid-image1.jpg"  alt="grid-images" />
						</div>
					</div>
					<div class="sub-grid-item">
						<div class="img-wrapper left-top-right">
						<img src="<?php echo get_template_directory_uri(); ?>/public/images/grid-image2.jpg"  alt="grid-images" />
						</div>
					</div>
				</div>
				<div class="img-wrapper left-bottom">
					<img src="<?php echo get_template_directory_uri(); ?>/public/images/grid-image4.jpg"  alt="grid-images" />
				</div>
			</div>
			<div class="images-grid-item right">
				<div class="sub-grid">
					<div class="sub-grid-item">
						<div class="img-wrapper right-left">
							<img src="<?php echo get_template_directory_uri(); ?>/public/images/grid-image3.jpg"  alt="grid-images" />
						</div>
					</div>
					<div class="sub-grid-item">
						<div class="img-wrapper right-right-top">
							<img src="<?php echo get_template_directory_uri(); ?>/public/images/grid-image5.jpg"  alt="grid-images" />
						</div>
						<div class="img-wrapper right-right-bottom">
							<img src="<?php echo get_template_directory_uri(); ?>/public/images/grid-image6.jpg"  alt="grid-images" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- aolcc-images-section-end  -->
	<!-- meet-director-section-start  -->
	<section class="meet-director-section">
		<div class="container">
			<h2>Meet Your Campus Director</h2>
			<div class="meet-director-grid">
				<div class="grid-item-left">
					<div class="content-block">
						<span>Duane Yeomans</span>
						<ul class="designation">
							<li>Campus Director</li>
							<li>Owner</li>
							<li>Admissions Representative</li>
						</ul>
						<p>Duane can do it all, and the spirit of the Halifax campus reflects his effort and expertise!</p>
						<p>Duane has proudly been working with AOLCC since its beginning. He also had his beginnings here, starting his career soon after graduating from University. And, he was part of AOLCC’s evolution as the internet came onto the scene! With 30+ years operating with AOLCC, you can be sure of his expertise.</p>
						<p>His favourite part about his job is meeting new people and helping them choose a career program based on their goals. He also loves the international aspect of the Halifax campus. </p>
						<p>Duane has a passion for helping students achieve their career and life goals. He is always there to help students and encourage them to reach their full potential. Their success is the most rewarding part of his job.</p>
						<i>Schedule a campus tour!</i>
						<a href="#" class="orange-btn">Schedule a campus tour</a>
					</div>
				</div>
				<div class="grid-item-right">
					<div class="img-wrapper">
						<img src="<?php echo get_template_directory_uri(); ?>/public/images/director-image.jpg" alt="director image">
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- meet-director-section-end  -->
	<!-- fun-facts-section-start  -->
	<section class="fun-facts-section">
		<div class="container">
			<h2>Fun Fact</h2>
			<div class="content-block">
			<p> 
				Did you know that the Halifax Transit Ferry is the oldest salt-water ferry in North America?
				As a matter of fact, it has been connecting Halifax to Dartmouth for over 269 years.
			</p>
			<a href="javascript:void(0);" class="site-white-btn">Know More</a>
			</div>
		</div>
	</section>
	<!-- fun-facts-section-start  -->
	<!-- why-choose-alocc-section-start  -->
	<section class="why-choose-alocc-section ils-great-section halifax-why-choose-alocc">
		<div class="container">
			<div class="why-choose-alocc-wrapper">
				<h2>Why Choose AOLCC?</h2>
				<ul class="why-choose-content-wrapper">
					<li>
						<div class="why-choose-alocc-card">
							<em>
		                    	<img src="<?php echo get_template_directory_uri(); ?>/public/images/student.png"  alt="student" />
							</em>
							<h3>Student Focused Training</h3>
				            <p>We have shifted the focus from teaching and put it where it belongs, on learning. Our flexible and effective programs will meet your unique needs. </p>
						</div>
					</li>
					<li>
						<div class="why-choose-alocc-card">
							<em>
									<img src="<?php echo get_template_directory_uri(); ?>/public/images/short-effe-cour.png"  alt="short-effe-cour" />
							</em>
							<h3>Competency-based Learning</h3>
							<p>In other words, each lesson has a defined goal and tests your understanding at the end. If you don’t understand the lesson, then you can repeat it before moving on!</p>
						</div>
					</li>
					<li>
						<div class="why-choose-alocc-card">
							<em>
									<img src="<?php echo get_template_directory_uri(); ?>/public/images/diploma-certi-cou.png"  alt="diploma-certi-cou" />
							</em>
							<h3>You Don't Need Computer Or Special Skills</h3>
							<p>No matter what skills you have when you enrol, we have a level to suit you. And, we’ll always help you along the way. </p>
						</div>
					</li>
					<li>
						<div class="why-choose-alocc-card">
						<em>
		                    	<img src="<?php echo get_template_directory_uri(); ?>/public/images/hands-on-traning.png"  alt="hands-on-traning" />
						</em>
							<h3>Start Right Now</h3>
							<p>You can start your studies right now! Enrolment is continuous throughout the year. </p>
						</div>
					</li>
					<li>
						<div class="why-choose-alocc-card">
							<em>
									<img src="<?php echo get_template_directory_uri(); ?>/public/images/learn-at-own-peace.png"  alt="learn-at-own-peace" />
							</em>
							<h3>Learn At Your Own Pace</h3>
							<p>Move through studies in your own time - no need to keep pace with other students.</p>
								</div>
					</li>
					<li>
						<div class="why-choose-alocc-card">
						<em>
		                    	<img src="<?php echo get_template_directory_uri(); ?>/public/images/flexible-scdu.png"  alt="flexible-scdu" />
						</em>
									<h3>Learn The Better Way</h3>
									<p>Research shows that “Learning by Doing” is the most effective way to retain information. Take advantage of this learning style with AOLCC programs. </p>
								</div>
					</li>
					<li>
						<div class="why-choose-alocc-card">
							<em>
									<img src="<?php echo get_template_directory_uri(); ?>/public/images/help.png"  alt="help" />
							</em>
							<h3>Individual Help</h3>
							<p>Trained Learning Coaches are available on-site at all times to offer help with your courses.</p>
								</div>
					</li>
					<li>
						<div class="why-choose-alocc-card">
							<em>
									<img src="<?php echo get_template_directory_uri(); ?>/public/images/practicle-exp.png"  alt="practicle-exp" />
							</em>
							<h3>Flexible Scheduling</h3>
							<p>Never miss a class or fall behind. If you need to miss a lesson, no worries. You can take it another time.</p>
								</div>
					</li>
					<li>
						<div class="why-choose-alocc-card">
							<em>
									<img src="<?php echo get_template_directory_uri(); ?>/public/images/job-placement.png"  alt="job-placement" />
							</em>
							<h3>Safe Learning Environment</h3>
							<p>There is no intimidating classroom atmosphere or student competition! Here, we ensure a comfortable and friendly learning environment for all students.</p>
								</div>
					</li>												
				</ul>
			</div>
		</div>
	</section>
	<!-- why-choose-alocc-section-end  -->
	<!-- FAQ section start -->
	<section class="location-faq-section halifax-faq-section" >
			<div class="container">
				<h2><?php echo get_field('frequently_asked_questions_title_text') ?></h2>
				<?php
				if (get_field('question_button_list')) {
					?>
					<div class="faq-button-wrapper">
						<?php
						while (has_sub_field('question_button_list')) :
							?>
							<p>
								<a href="<?php echo get_sub_field('button_url'); ?>" class="orange-btn" title="<?php echo get_sub_field('button_title_text'); ?>" target="_blank" ><?php echo get_sub_field('button_title_text'); ?></a>
							</p>
							<?php
						endwhile;
						?>
					</div>
					<?php
				}
				?>
				<div class="faq-type-wrapper">
					<div class="faq-wrapper">
						<?php
						if (have_rows('admissions_questions_list')) {
							?>
							<h3><?php echo get_field('admissions_title_text') ?> <span>(<?php echo count(get_field('admissions_questions_list')); ?>)</span></h3>

							<div class="faq-accordian-outer">
								<?php
								while (has_sub_field('admissions_questions_list')) :
									?>
									<div class="accordian-wrap">
										<h4 class="accordian-head"><i class="<?php echo get_sub_field('icon'); ?>"></i><?php echo get_sub_field('question'); ?></h4>
										<div class="accordian-body">
											<p><?php echo get_sub_field('answer'); ?></p>
										</div>
									</div>
									<?php
								endwhile;
								?>
							</div>
							<?php
						}
						?>
					</div>
					<div class="faq-wrapper">
						<?php
						if (have_rows('general_questions_list')) {
							?>
							<h3><?php echo get_field('general_title_text') ?> <span>(<?php echo count(get_field('general_questions_list')); ?>)</span></h3>

							<div class="faq-accordian-outer">
								<?php
								while (has_sub_field('general_questions_list')) :
									?>
									<div class="accordian-wrap">
										<h4 class="accordian-head"><i class="<?php echo get_sub_field('icon'); ?>"></i> <?php echo get_sub_field('question'); ?></h4>
										<div class="accordian-body">
											<p><?php echo get_sub_field('answer'); ?></p>    
										</div>
									</div>
									<?php
								endwhile;
								?>
							</div>
							<?php
						}
						?>
					</div>
				</div>
			</div>
	</section>
	<!-- FAQ section end -->
	<!-- welcome to belleville section start-->
	<!-- <section class="bellevile-welcome-section">
		<div class="container">
			<h2><?php echo get_field('welcome_to_aolcc_title_text'); ?></h2>
			<div class="location-address-wrapper">
				<?php
				$call_us_today_description = get_field('call_us_today_description');
				if ($call_us_today_description != '') {
					?>
					<div class="location-address-inner-wrapper">
						<div class="location-address-block">
							<div class="address-inner-wrapper">
								<?php echo $call_us_today_description; ?>
							</div>
						</div>
					</div>
					<?php
				}
				$have_questions_description = get_field('have_questions_description');
				if ($have_questions_description != '') {
					?>
					<div class="location-address-inner-wrapper">
						<div class="location-address-block">
							<div class="address-inner-wrapper">
								<?php echo $have_questions_description; ?>
								<div class="address-button-wrapper">
									<?php
									$book_appointment_button_text = get_field('book_appointment_button_text');
									$book_appointment_button_url = get_field('book_appointment_button_url');
									if ($book_appointment_button_text != '' && $book_appointment_button_url != '') {
										?>
										<a href="<?php echo $book_appointment_button_url; ?>" class="white-btn" title="<?php echo $book_appointment_button_text ?>"><?php echo $book_appointment_button_text ?></a>
										<?php
									}
									$request_info_button_text = get_field('request_info_button_text');
									$request_info_button_url = get_field('request_info_button_url');
									if ($request_info_button_text != '' && $request_info_button_url != '') {
										?>
										<a href="<?php echo $request_info_button_url; ?>" class="orange-btn" title="<?php echo $request_info_button_text; ?>"><?php echo $request_info_button_text; ?></a>
										<?php
									}
									?>
									
								</div>
							</div>
						</div>
					</div>
					<?php
				}
				?>
			</div>
			<div class="choose-promise-mission-block promise-section-wrapper">
				<?php 
				$short_description = get_field('short_description');
				if ($short_description != '') {
					echo $short_description;
				}
				?>
			</div>
		</div>
	</section> -->
	<!-- welcome to belleville section end-->
	<?php
	$contact_background_image = 'style="background-image: url('. get_template_directory_uri() .'/public/images/leaf-backgorund.jpg)"';
	?>
	<!-- contact-form-section-start -->
	<section class="contact-form-section section with-bg-image hellifax-contact-form" data-attr="contact-form" <?php echo $contact_background_image; ?>>		
		<div class="container">
			<div class="title-wrapper">
			    <h2>Contact us for more information</h2>
				<p>And we'll get back to you within 48 hours.</p>
			</div>
			<div class="contact-us-form ">
				<?php 
				$iframe_short_code = get_field('contact_form_short_code');
				echo do_shortcode($iframe_short_code);
				?>
			</div>
		</div>
	</section>
	<!-- contact-form-section-start -->
	<!-- <?php
	$googe_map_api_key = get_field('google_map_api_key', 'options');
	$map_zoom_level = get_field('map_zoom_level');
	$google_map = get_field('google_map');
	if ($map_zoom_level == '') {
		$map_zoom_level = 16;
	}
	if ($googe_map_api_key != '' && $google_map != '') {
		?>
		<section class="location-map-section section" data-attr="map-directions">
			<div class="container">
				<h2><?php echo get_field('map_title_text'); ?></h2>
				<div class="map-section-wrapper">
					<div class="map-wraper">
						<?php
						if($google_map ) {
							?>
							<div class="acf-map" data-zoom="<?php echo $map_zoom_level; ?>">
								<div class="marker" data-lat="<?php echo esc_attr($google_map['lat']); ?>" data-lng="<?php echo esc_attr($google_map['lng']); ?>"></div>
							</div>
							<?php 
						}
						?>
					</div>
					<div class="how-to-find-section">
						<h3>How to find us</h3>
						<?php
						$address = get_field('address');
						if ($address != '') {
							?>
							<p><?php echo $address; ?></p>
							<?php
						}
						?>
						<?php
						$new_directioin_text = get_field('new_directioin_text');
						if ($new_directioin_text != '') {
							?>
							<p class="new_directioin_text"><?php echo $new_directioin_text; ?></p>
							<?php
						}
						?>	
					</div>
				</div>

			</div>
		</section>
		<?php
	}
	?> -->
	<!-- <?php
	$call_us_description = get_field('call_us_description');
	if ($call_us_description != '') {
		?>
		<section class="learn-more-block inner-page-learn-more-block">
			<div class="container">
				<div class="call-us-wrapper">
					<div class="learn-more-wrapper">
						<?php echo $call_us_description; ?>
					</div>  
					<?php
					$start_now_button_text = get_field('start_now_button_text');
					$start_now_button_url = get_field('start_now_button_url');
					if ($start_now_button_text != '' && $start_now_button_url != '') {
						?>
						<div class="btn-wrapper">
							<a href="<?php echo $start_now_button_url; ?>" class="white-btn" title="<?php echo $start_now_button_text; ?>"><?php echo $start_now_button_text; ?></a>
						</div>
						<?php
					}
					?>
				</div>	
			</div>
		</section>
		<?php
	}
	?> -->
	<!-- image section start -->
	<!-- <section class="location-page-image-section">
		<div class="container">
			<div class="location-page-image-inner has-right-image">
				<?php
				$you_image_id = get_field('youll_be_lovin_image');
				$you_image = wp_get_attachment_image_src($you_image_id, 'full');
				$you_image_alt = get_post_meta($you_image_id, '_wp_attachment_image_alt', true);
				$you_image_title = get_the_title($you_image_id);
				if ($you_image_alt == '') {
					$you_image_alt = $you_image_title;
				}
				if (!empty($you_image)) {
					?>
					<div class="image-block">
						<img class="js-lazy-image" data-src="<?php echo $you_image[0]; ?>" alt="<?php echo $you_image_alt; ?>"/>
					</div>
					<?php
				}
				?>
				<div class="content-block">
					<h2><?php echo get_field('youll_be_lovin_title_text'); ?></h2>
					<?php
					$you_sub_title = get_field('youll_be_lovin_sub_title_text');
					if ($you_sub_title != '') {
						?>
						<p class="subtitle"><?php echo $you_sub_title; ?></p>
						<?php
					}
					$you_description = get_field('youll_be_lovin_description');
					if ($you_description != '') {
						?>
						<p><?php echo $you_description; ?></p>
						<?php
					}
					$you_button_text = get_field('youll_be_lovin_button_text');
					$you_button_url = get_field('youll_be_lovin_button_url'); 
					if ($you_button_url != '' && $you_button_text != '') {
						?>
						<a href="<?php echo $you_button_url; ?>" class="orange-btn" title="<?php echo $you_button_text; ?>"><?php echo $you_button_text; ?></a>
						<?php
					}
					?>					
				</div>
			</div>
			<div class="location-page-image-inner">
				<?php
				$simple_image_id = get_field('simply_a_better_image');
				$simple_image = wp_get_attachment_image_src($simple_image_id, 'full');
				$simple_image_alt = get_post_meta($simple_image_id, '_wp_attachment_image_alt', true);
				$simple_image_title = get_the_title($simple_image_id);
				if ($simple_image_alt == '') {
					$simple_image_alt = $simple_image_title;
				}
				if (!empty($simple_image)) {
					?>
					<div class="image-block">
						<img class="js-lazy-image" data-src="<?php echo $simple_image[0]; ?>" alt="<?php echo $simple_image_alt; ?>"/>
					</div>
					<?php
				}
				?>
				<div class="content-block">
					<h2><?php echo get_field('simply_a_better_title_text'); ?></h2>
					<?php
					$simple_sub_title = get_field('simply_a_better_sub_title_text');
					if ($simple_sub_title != '') {
						?>
						<p class="subtitle"><?php echo $simple_sub_title; ?></p>
						<?php
					}
					$simple_description = get_field('simply_a_better_description');
					if ($simple_description != '') {
						?>
						<p><?php echo $simple_description; ?></p>
						<?php
					}
					$simply_button_text = get_field('simply_a_better_learn_more_button_text');
					$simply_button_url = get_field('simply_a_better_learn_more_button_url'); 
					if ($simply_button_url != '' && $simply_button_text != '') {
						?>
						<a href="<?php echo $simply_button_url; ?>" class="orange-btn" title="<?php echo $simply_button_text; ?>"><?php echo $simply_button_text; ?></a>
						<?php
					}
					?>
				</div>
			</div>
			
		</div>
	</section> -->
	<!-- image section end -->
	<!-- <?php
	$career_title = get_field('career_title_text');
	$career_description = get_field('career_description');
	if ($career_title != '' && $career_description != '') {
		?>
		<section class="find-out-section">
			<div class="container">
				<h2><?php echo $career_title; ?></h2>
				<?php echo $career_description; ?>
			</div>
		</section>
		<?php
	}
	?> -->
	<!-- <?php 
	if (have_rows('downloadables_list')) {
		?>
		<section class="downloadables-section">
			<div class="container">
				<h2><?php echo get_field('downloadables_title_text'); ?></h2>
				<?php
				while (has_sub_field('downloadables_list')) :
					$downloadables_title_text =  get_sub_field('title');
					$options =  get_sub_field('options');
					?>
					<div class="custom-card">
						<div class="custom-card-header">
							<a href="#" title="<?php echo $downloadables_title_text; ?>"><?php echo $downloadables_title_text; ?></a>
						</div>
						<div class="custom-card-body">
							<?php
							if ($options != 'Full Description') {
								?>
								<p><?php echo get_sub_field('short_description'); ?>
								<a href="<?php echo get_sub_field('upload_file'); ?>" target="_blank" title="<?php echo get_sub_field('click_here_button_text'); ?>"><?php echo get_sub_field('click_here_button_text'); ?></a></p>
								<?php
							} else {
								echo get_sub_field('description');
							}
							?>
						</div>
					</div>
					<?php
				endwhile;
				?>
			</div>
		</section>
		<?php
	}
	?>
	<?php
	$key_performance_description = get_field('key_performance_description');
	if ($key_performance_description != '') {
		?>
		<section class="learn-more-block-outer">
			<div class="learn-more-block">
				<div class="container">
					<div class="learn-more-wrapper">
						<?php echo $key_performance_description; ?>
					</div>  
					<?php
					$belleville_campus_button_text = get_field('belleville_campus_button_text');
					$belleville_campus_url = get_field('belleville_campus_url');
					if ($belleville_campus_button_text != '' && $belleville_campus_url != '') {
						?>
						<div class="btn-wrapper">
							<a href="<?php echo $belleville_campus_url; ?>" target="_blank" class="white-btn" title="<?php echo $belleville_campus_button_text; ?>"> <?php echo $belleville_campus_button_text; ?></a>
						</div>
						<?php
					}
					?>					
				</div>
			</div>
		</section>
		<?php
	}
	?> -->

	<!-- welcome to belleville section start-->
	<!-- <section class="bellevile-welcome-section">
		<div class="container">
			<div class="choose-promise-mission-block">
				<?php 
				if (have_rows('promise_list')) {
					?>
					<div class="cpm-outer-wrapper">
						<?php
						while (has_sub_field('promise_list')) :
							$promise_image_id = get_sub_field('image');
							$promise_image = wp_get_attachment_image_src($promise_image_id, 'full');
							$promise_image_alt = get_post_meta($promise_image_id, '_wp_attachment_image_alt', true);
							$promise_image_title = get_the_title($promise_image_id);
							if ($promise_image_alt == '') {
								$promise_image_alt = $promise_image_title;
							}
							?>
							<div class="cpm">
								<?php
								if (!empty($promise_image)) {
									?>
									<em>
										<img class="js-lazy-image" data-src="<?php echo $promise_image[0]; ?>" alt="<?php echo $promise_image_alt; ?>"/>
									</em>
									<?php
								}
								?>								
								<div class="cpm-text">
									<h3><?php echo get_sub_field('title'); ?></h3>
									<p class="cpm-subtitle"><?php echo get_sub_field('sub_title'); ?></p>
									<p><?php echo get_sub_field('short_description'); ?></p>
								</div>
							</div>
							<?php
						endwhile;
						?>
					</div>
					<?php
				}
				?>
			</div>
		</div>
	</section> -->
	<!-- welcome to belleville section end-->
   <!-- downloadables -section-start -->
    <section class="downloadables-section hellifax-download">
		<div class="container">
			<h2>Downloadables</h2>
				<div class="custom-card">
					<div class="custom-card-header">
						<a href="#" title="PTIB Certificate">PTIB Certificate</a>
					</div>
					<div class="custom-card-body">
						<p>Please <a href="https://www.academyoflearning.com/wp-content/uploads/2021/08/Designate_Certificate_issued_April_2020-1.pdf" target="_blank" rel="noopener">CLICK HERE</a> for information our PTIB certification. Please visit the <a href="https://www.privatetraininginstitutions.gov.bc.ca/" target="_blank" rel="noopener">BC Private Training Institution Website</a> for more information on Career Colleges in BC</p>
					</div>
				</div>
				<div class="custom-card">
					<div class="custom-card-header">
						<a href="#" title="Policies and Procedures">Policies and Procedures</a>
					</div>
					<div class="custom-card-body">
						<p>To download the Richmond Campus Student Handbook <a href="https://www.academyoflearning.com/wp-content/uploads/2021/09/Student_and_School_Policy_Handbook_-_2021-09-01.pdf" target="_blank" rel="noopener">CLICK HERE</a>. To download the Tuition and Fee Refund policy <a href="https://www.academyoflearning.com/wp-content/uploads/2021/10/Refund_Policy_of_AOLCC-Richmond_Campus_Updated_2021-09-01.pdf" target="_blank" rel="noopener">CLICK HERE</a>.</p>
					</div>
				</div>
				<div class="custom-card">
					<div class="custom-card-header">
						<a href="#" title="Tuition Pricing">Tuition Pricing</a>
					</div>
					<div class="custom-card-body">
						<p>Please <a href="https://www.academyoflearning.com/wp-content/uploads/2021/08/2022.23_Richmond_Website.pdf" target="_blank" rel="noopener">CLICK HERE</a> for information about Tuition Pricing for Richmond. Please visit the <a href="https://www.privatetraininginstitutions.gov.bc.ca/" target="_blank" rel="noopener">BC Private Training Institution Website</a> for more information on Career Colleges in BC</p>
					</div>
				</div>
				<div class="custom-card">
					<div class="custom-card-header">
						<a href="#" title="COVID-19 Safety and Exposure Control Plan">COVID-19 Safety and Exposure Control Plan</a>
					</div>
					<div class="custom-card-body">
						<p>We are committed to providing a safe and healthy workplace for all. <a href="https://www.academyoflearning.com/wp-content/uploads/2021/11/COVID-19-Safety-and-Exposure-Control-Plan.pdf" target="_blank" rel="noopener">CLICK HERE</a> for our COVID-19 Safety and Exposure Control Plan.</p>
					</div>
				</div>
				<div class="custom-card">
					<div class="custom-card-header">
						<a href="#" title="International Student Travel &amp; Self- Isolation Guide">International Student Travel &amp; Self- Isolation Guide</a>
					</div>
					<div class="custom-card-body">
						<p>These guidelines are for all Academy of Learning College international students who are currently outside of Canada. <a href="https://www.academyoflearning.com/wp-content/uploads/2021/08/International_Student_Travel_and_Self_Isolation_Guide-AOLCC.pdf" target="_blank" rel="noopener">CLICK HERE</a></p>
					</div>
				</div>
				<div class="custom-card">
					<div class="custom-card-header">
						<a href="#" title="Sexual Misconduct Policy">Sexual Misconduct Policy</a>
					</div>
					<div class="custom-card-body">
						<p>The Academy of Learning intends to provide a safe and secure learning environment. <a href="https://www.academyoflearning.com/wp-content/uploads/2021/08/Sexual_Misconduct_Policy_of_AOLCC-Richmond_2021-09-01_REVISED.pdf" target="_blank" rel="noopener">CLICK HERE</a> to view our Sexual Misconduct Policy.</p>
					</div>
				</div>
		</div>
	</section>
</main>